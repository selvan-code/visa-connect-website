/**
 * Shared Header Component
 * Injects the navbar into every page and highlights the active nav link.
 */

(function () {
  const headerHTML = `
  <header class="navbar">

    <!-- LEFT: WhatsApp icon + Brand -->
    <div class="navbar-left">
      <a class="navbar-whatsapp" href="https://wa.me/918722169966" target="_blank" rel="noopener" title="Chat on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.83L.055 23.454a.5.5 0 0 0 .607.61l5.783-1.516A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 0 1-5.031-1.378l-.36-.214-3.733.979.997-3.645-.235-.374A9.861 9.861 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/></svg>
        <span>WhatsApp</span>
      </a>

      <div class="brand">
        <img src="assets/images/logo.jpeg" class="logo-img" alt="Visa Connect Assis Logo">
        <span class="logo-text">Visa Connect Assis</span>
      </div>
    </div>

    <!-- CENTER: Nav links -->
    <nav class="nav-pill">
      <a class="nav-item" href="index.html">🏠 Home</a>
      <a class="nav-item" href="about.html">ℹ️ About</a>
      <a class="nav-item" href="australia.html"><span class="fi fi-au"></span> Australia</a>
      <a class="nav-item" href="uk.html"><span class="fi fi-gb"></span> UK</a>
      <a class="nav-item" href="usa.html"><span class="fi fi-us"></span> USA</a>
      <a class="nav-item" href="eu.html"><span class="fi fi-eu"></span> EU</a>
      <a class="nav-item" href="contact.html">📞 Contact</a>
    </nav>

    <!-- RIGHT: Phone number -->
    <a class="navbar-phone" href="tel:+918722169966">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.62-.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.07 16.92z"/></svg>
      <span>+91 87221 69966</span>
    </a>

  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Auto-highlight the active nav link based on current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-item").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
})();
