const sections = [...document.querySelectorAll("main section[id], main[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 180;

  let currentId = "top";
  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${currentId}`);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();
