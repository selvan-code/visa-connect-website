document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {

        e.preventDefault();

        const data = {
            fullname: document.getElementById("fullname").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            document.getElementById("responseMessage").innerHTML =
                "<p style='color:lightgreen'>" +
                result.message +
                "</p>";

            document.getElementById("contactForm").reset();

        } catch (error) {

            document.getElementById("responseMessage").innerHTML =
                "<p style='color:red'>Error submitting form</p>";

            console.log(error);

        }

    });