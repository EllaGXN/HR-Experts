(function(){
  const el = document.getElementById("site-footer-include");
  if(!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo" style="margin-bottom:14px;"><img src="assets/img/logo-white.png" alt="HR Experts" width="120" height="124"></a>
          <p style="color:rgba(255,255,255,.68); max-width:32ch;" data-i18n="footer.tagline">Recruitment and foreign-workforce specialists based in Ulaanbaatar, Mongolia.</p>
          <div class="social" style="margin-top:18px;">
            <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.6 1.77-2.6 3.58V23h-4V8z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 3.3.15 4.8 1.7 4.96 4.96.06 1.3.07 1.6.07 4.77 0 3.17 0 3.47-.07 4.77-.16 3.25-1.65 4.8-4.96 4.96-1.3.06-1.6.07-4.9.07-3.2 0-3.6 0-4.9-.07-3.32-.15-4.8-1.72-4.96-4.96C2.07 15.47 2 15.17 2 12c0-3.17 0-3.47.07-4.77.16-3.26 1.65-4.8 4.96-4.96C8.4 2.2 8.8 2.2 12 2.2zm0 3.37a6.43 6.43 0 1 0 0 12.86 6.43 6.43 0 0 0 0-12.86zm0 10.6a4.17 4.17 0 1 1 0-8.34 4.17 4.17 0 0 1 0 8.34zm6.68-10.85a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg></a>
          </div>
        </div>
        <div>
          <h4 data-i18n="footer.links.h">Useful links</h4>
          <a href="index.html" data-i18n="nav.home">Home</a>
          <a href="about.html" data-i18n="nav.about">About</a>
          <a href="services.html" data-i18n="nav.services">Services</a>
          <a href="foreign-workers.html" data-i18n="nav.fw">Foreign Workers</a>
          <a href="contact.html" data-i18n="nav.contact">Contact Us</a>
        </div>
        <div>
          <h4 data-i18n="footer.services.h">Our services</h4>
          <a href="services.html" data-i18n="home.s1.h">HR Consulting</a>
          <a href="services.html" data-i18n="home.s2.h">Head Hunting</a>
          <a href="services.html" data-i18n="home.s3.h">Recruiting</a>
          <a href="services.html" data-i18n="home.s4.h">Staff Renting</a>
          <a href="foreign-workers.html" data-i18n="home.s5.h">Foreign Worker & Visa Placement</a>
        </div>
        <div>
          <h4 data-i18n="footer.contact.h">Contact us</h4>
          <p style="color:rgba(255,255,255,.68); font-size:.92rem; max-width:30ch;">805, 8th floor, Shangri-La Office, Olympus 19A, 1st khoroo, Sukhbaatar District, Ulaanbaatar, Mongolia</p>
          <p style="color:rgba(255,255,255,.68); font-size:.92rem; margin-top:8px;">+976 9911 0173<br>info@hrexperts.mn</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="footer-year"></span> HR Experts. <span data-i18n="footer.rights">All rights reserved.</span></span>
      </div>
    </div>
  `;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  if(typeof applyLang === "function") applyLang(getLang());
})();
