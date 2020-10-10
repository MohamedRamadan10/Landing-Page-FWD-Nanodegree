// Global variables
const fragment = document.createDocumentFragment();
const sectionList = document.querySelectorAll("section");
const navBarList = document.getElementById("navbar-list");
const nav = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar .nav-link");
// Change navbar on scroll
const bgNavbar = () => {
  window.addEventListener("scroll", function (e) {
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  });
};

// Create Link Navbar
const createNavItemHTML = (id, name) => {
  const itemHTML = `<a class ="nav-link" href="#${id}" data-id="${id}">${name}</a>`;
  return itemHTML;
};

// The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen
const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Build the navbar
const buildNavigation = () => {
  for (let i = 0; i < sectionList.length; i++) {
    const newMenuItem = document.createElement("li");
    const sectionName = sectionList[i].getAttribute("data-nav");
    const sectionId = sectionList[i].getAttribute("id");
    newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName);
    fragment.appendChild(newMenuItem);
  }

  navBarList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport
const setActiveClass = () => {
  for (let i = 0; i < sectionList.length; i++) {
    if (isInViewport(sectionList[i])) {
      sectionList[i].classList.add("section-active");
    } else {
      sectionList[i].classList.remove("section-active");
    }
  }
};
const makeNavLinksSmooth = () => {
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
};

// Call function
bgNavbar();
createNavItemHTML();
buildNavigation();
makeNavLinksSmooth();
document.addEventListener("scroll", function () {
  setActiveClass();
});
