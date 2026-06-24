from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import smtplib
from email.mime.text import MIMEText
import os

app = Flask(__name__)
CORS(app)

# Database setup
def init_db():
    conn = sqlite3.connect('enquiries.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS enquiries
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  fullname TEXT,
                  email TEXT,
                  phone TEXT,
                  message TEXT,
                  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)''')
    conn.commit()
    conn.close()

init_db()

# Email configuration (replace with your email settings)
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SENDER_EMAIL = 'your_email@gmail.com'  # Replace with your email
SENDER_PASSWORD = 'your_password'  # Replace with your password
RECEIVER_EMAIL = 'info@vissaconnectassis.com'

def send_email(fullname, email, phone, message):
    subject = f"New Enquiry from {fullname}"
    body = f"""
    New enquiry received:

    Name: {fullname}
    Email: {email}
    Phone: {phone}
    Message: {message}
    """

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = SENDER_EMAIL
    msg['To'] = RECEIVER_EMAIL

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, RECEIVER_EMAIL, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False

@app.route('/submit', methods=['POST'])
def submit_enquiry():
    data = request.get_json()
    fullname = data.get('fullname')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    if not all([fullname, email, phone, message]):
        return jsonify({'message': 'All fields are required'}), 400

    # Save to database
    conn = sqlite3.connect('enquiries.db')
    c = conn.cursor()
    c.execute("INSERT INTO enquiries (fullname, email, phone, message) VALUES (?, ?, ?, ?)",
              (fullname, email, phone, message))
    conn.commit()
    conn.close()

    # Send email
    email_sent = send_email(fullname, email, phone, message)

    # For WhatsApp, since we can't directly send, perhaps just log or use API
    # For now, just store and send email

    return jsonify({'message': 'Enquiry submitted successfully!'})

@app.route('/admin', methods=['GET'])
def admin_view():
    conn = sqlite3.connect('enquiries.db')
    c = conn.cursor()
    c.execute('SELECT id, fullname, email, phone, message, timestamp FROM enquiries ORDER BY id DESC')
    rows = c.fetchall()
    conn.close()

    rows_html = ''.join([
        f"<tr><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td></tr>"
        for r in rows
    ])

    return f"""
    <html>
    <head>
      <title>Enquiries Admin</title>
      <style>
        body {{ font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }}
        table {{ width: 100%; border-collapse: collapse; background: white; }}
        th, td {{ border: 1px solid #ccc; padding: 8px; text-align: left; }}
        th {{ background: #007acc; color: white; }}
      </style>
    </head>
    <body>
      <h1>Enquiries Admin</h1>
      <p>Showing {len(rows)} records</p>
      <table>
        <tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Created</th></tr>
        {rows_html}
      </table>
    </body>
    </html>
    """

if __name__ == '__main__':
    app.run(debug=True)