function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const color = currentSection.getAttribute("data-bg");
    document.body.style.backgroundColor = color;
  }
});
