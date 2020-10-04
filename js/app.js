const bgNavbar = () => {
  window.addEventListener("scroll", function (e) {
    const nav = document.getElementById("navbar");
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

const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

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

const spyScrolling = () => {
  const sections = document.querySelectorAll(".bg-hero");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id;
        document.querySelector(".active").classList.remove("active");
        document
          .querySelector(`a[href*=${id}]`)
          .parentNode.classList.add("active");
      }
  };
};

bgNavbar();
makeNavLinksSmooth();
spyScrolling();
