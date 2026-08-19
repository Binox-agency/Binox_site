const footerHTML = `
<footer class="reveal active">
  <div class="wrap">
    <div class="footer-top">
      <a href="index.html" class="logo-mark" style="display: flex; align-items: center;">
        <img src="assets/Mark_Black.png" alt="Binox Logo" style="height: 140px; width: auto;">
      </a>
      <div class="footer-cols">
        <div class="footer-col">
          <h5>Sitemap</h5>
          <a href="work.html">Work</a>
          <a href="services.html">Services</a>
          <a href="blog.html">Blog</a>
          <a href="about.html">About</a>
          <a href="index.html#contact">Contact</a>
        </div>
        <div class="footer-col">
          <h5>Studio</h5>
          <a href="mailto:geral.binox@gmail.com">geral.binox@gmail.com</a>
          <a href="#">Porto, Portugal</a>
        </div>
        <div class="footer-col">
          <h5>Socials</h5>
          <div style="display: flex; gap: 10px; margin-top: 6px;">
            <a href="#" aria-label="Instagram" title="Instagram" style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border: 1px solid var(--line-strong); border-radius: 50%;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn" style="display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border: 1px solid var(--line-strong); border-radius: 50%;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Binox. Two perspectives, one vision.</span>
      <span>Built by Binox</span>
    </div>
  </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("footer-placeholder");
  if (placeholder) {
    placeholder.innerHTML = footerHTML;
  }
});