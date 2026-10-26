const navbarHTML = `
<header>
  <a href="index.html" class="logo-mark" style="display: flex; align-items: center;">
    <img src="assets/logo.png" alt="Binox Logo" style="height: 52px; width: auto;">
  </a>
  <nav>
    <ul>
      <li><a href="index.html#top">Home</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="index.html#contact">Contact</a></li>
    </ul>
  </nav>
</header>
`;

// Wait for the page to load, then inject the navbar
document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("navbar-placeholder");
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }

  // Inject Small Blue Glow Cursor Ball Script
  if (!document.getElementById("binox-micro-interactions-js")) {
    const script = document.createElement("script");
    script.id = "binox-micro-interactions-js";
    script.src = "micro-interactions.js";
    document.body.appendChild(script);
  }
});
