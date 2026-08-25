// On the homepage the header floats transparently over the hero and picks
// up a solid background once the page scrolls past the top. See
// assets/sass/components/_header.scss for the corresponding styles.
if (document.body.classList.contains("has-hero")) {
  const header = document.querySelector("header");

  if (header) {
    const syncScrolled = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };

    syncScrolled();
    window.addEventListener("scroll", syncScrolled, { passive: true });
  }
}
