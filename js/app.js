// Global variables
const navbar = document.getElementById("navbar");
const navbarList = document.getElementById("navbar-list");
const sections = Array.from(document.querySelectorAll("section"));
const fragment = document.createDocumentFragment();

// Build Nav
const buildNav = () => {
  sections.forEach((section, i) => {
    const navbarItem = document.createElement("li");
    navbarItem.setAttribute("class", "nav-item");
    navbarItem.innerHTML = `<a href="#${section.dataset.nav}" class="nav-link">${section.dataset.nav}</a>`;
    fragment.appendChild(navbarItem);
  });
};

buildNav();
navbarList.appendChild(fragment);

// Hide and show navbar on scroll
window.onscroll = function (e) {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollY <= this.lastScroll) {
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  } else {
    navbar.classList.remove("show");
    navbar.classList.add("hide");
  }

  this.lastScroll = scrollY;

  // If user stop scrolling show navbar after 3.5 seconds
  let time;
  function checkScroll() {
    time = setTimeout(function () {
      navbar.classList.add("show");
      navbar.classList.remove("hide");
    }, 3500);
  }
  checkScroll();
};

// Add active link
const activeLinkNavSection = () => {
  const navbarLinks = document.querySelectorAll("#navbar-list li");
  const sectionsAll = document.querySelectorAll("section");
  let index = sections.length;
  while (--index && window.scrollY + 300 < sections[index].offsetTop) {}
  navbarLinks.forEach((link) => {
    link.classList.remove("active");
  });
  sectionsAll.forEach((link) => {
    link.classList.remove("section-active");
  });
  navbarLinks[index].classList.add("active");
  sectionsAll[index].classList.add("section-active");
};

activeLinkNavSection();
window.addEventListener("scroll", activeLinkNavSection);
