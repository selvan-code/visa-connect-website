/**
 * Shared Footer Component — Redesigned
 * Injects the full footer into every page.
 */

(function () {
  const footerHTML = `
  <footer class="footer">

    <div class="footer-accent-bar"></div>

    <div class="footer-body">

      <div class="footer-top-row">

        <!-- BRAND -->
        <div class="footer-brand">
          <div class="footer-logo-wrap">
            <img src="assets/images/logo.jpeg" class="footer-logo" alt="Visa Connect Assis">
            <div>
              <h3 class="footer-brand-name">Visa Connect Assis</h3>
              <span class="footer-brand-tag">Your Global Visa Partner</span>
            </div>
          </div>
          <p class="footer-brand-desc">
            Professional passport and visa assistance helping individuals,
            families, and businesses travel worldwide with confidence and ease.
          </p>
          <div class="footer-countries">
            <span title="USA">🇺🇸</span>
            <span title="UK">🇬🇧</span>
            <span title="Australia">🇦🇺</span>
            <span title="EU">🇪🇺</span>
            <span title="Canada">🇨🇦</span>
            <span title="UAE">🇦🇪</span>
            <span title="Singapore">🇸🇬</span>
          </div>
        </div>

        <!-- QUICK LINKS -->
        <div class="footer-col">
          <h4 class="footer-col-title"><span class="footer-col-dot"></span>Quick Links</h4>
          <ul class="footer-nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="australia.html">Australia Visa</a></li>
            <li><a href="uk.html">UK Visa</a></li>
            <li><a href="usa.html">USA Visa</a></li>
            <li><a href="eu.html">EU / Schengen Visa</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <!-- LEGAL + SOCIAL -->
        <div class="footer-col">
          <h4 class="footer-col-title"><span class="footer-col-dot"></span>Legal</h4>
          <ul class="footer-nav">
            <li><a href="privacy.html">Privacy Policy</a></li>
            <li><a href="terms.html">Terms &amp; Conditions</a></li>
          </ul>

          <h4 class="footer-col-title" style="margin-top:28px;"><span class="footer-col-dot"></span>Follow Us</h4>
          <div class="footer-socials">

            <!-- WhatsApp -->
            <a class="social-btn social-whatsapp" href="https://wa.me/918722169966" target="_blank" rel="noopener" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.83L.055 23.454a.5.5 0 0 0 .607.61l5.783-1.516A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/></svg>
            </a>

            <!-- Phone -->
            <a class="social-btn social-phone" href="tel:+918722169966" title="Call Us">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.62-.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.07 16.92z"/></svg>
            </a>

            <!-- Instagram -->
            <a class="social-btn social-instagram" href="https://www.instagram.com/visaconnectassis/" target="_blank" rel="noopener" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>

            <!-- Facebook -->
            <a class="social-btn social-facebook" href="https://www.facebook.com/profile.php?id=61570025681917" target="_blank" rel="noopener" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>

            <!-- YouTube -->
            <a class="social-btn social-youtube" href="https://www.youtube.com/@visaconnectassis" target="_blank" rel="noopener" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            <!-- LinkedIn -->
            <a class="social-btn social-linkedin" href="https://www.linkedin.com/in/visaconnectassis/" target="_blank" rel="noopener" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>

          </div>
        </div>

        <!-- CONTACT + MAP -->
        <div class="footer-col footer-col-wide">
          <h4 class="footer-col-title"><span class="footer-col-dot"></span>Get In Touch</h4>

          <div class="footer-contact-items">
            <a href="mailto:visaconnectassis.54@gmail.com" class="footer-contact-row">
              <div class="contact-icon-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span>visaconnectassis.54@gmail.com</span>
            </a>

            <a href="tel:+918722169966" class="footer-contact-row">
              <div class="contact-icon-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.62-.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.07 16.92z"/></svg>
              </div>
              <span>+91 87221 69966</span>
            </a>

            <div class="footer-contact-row no-link">
              <div class="contact-icon-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>2nd Floor, Jattappa Complex,<br>10, Kanakapura Main Rd,<br>Yelachenahalli, Bengaluru 560078</span>
            </div>
          </div>

          <div class="footer-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1664391098116!2d77.56795207457424!3d12.897017016510118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151b0a5d3755%3A0x4d14bb86373931d8!2sVisa%20Connect%20Assis!5e0!3m2!1sen!2sin!4v1774151945700!5m2!1sen!2sin"
              width="100%" height="170" style="border:0;" allowfullscreen="" loading="lazy">
            </iframe>
          </div>
        </div>

      </div>
    </div>

    <!-- BOTTOM BAR -->
    <div class="footer-bottom-bar">
      <div class="footer-bottom-inner">
        <p class="footer-disclaimer">
          ⚠️ Visa approvals are subject to the respective embassy or consulate. We provide documentation assistance only and are not affiliated with any government body.
        </p>
        <p class="footer-rights">© 2026 Visa Connect Assis. All rights reserved.</p>
      </div>
    </div>

  </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
