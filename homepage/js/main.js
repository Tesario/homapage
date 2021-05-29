/* Click Hamburger Script */

hamburger = document.querySelector(".header .hamburger");
mobile_menu = document.querySelector(".header .menu-container");
menu_item = document.querySelectorAll(".header .nav-menu li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

/* Scroll Script*/

var scroll_deactive = false;
const header = document.querySelector("#header");

document.querySelectorAll(".nav-menu li").forEach((link) => {
  link.addEventListener("click", () => {
    scroll_deactive = true;

    setTimeout(() => {
      scroll_deactive = false;
    }, 600);
  });
});

window.addEventListener("scroll", () => {
  changeHeader(window.scrollY);
  changeSection(window.scrollY);
});

function changeHeader(scrollY) {
  var scroll_position = scrollY;
  if (scroll_position > 200) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
}

function changeSection(scrollY) {
  if (!scroll_deactive) {
    var space = 300;

    var top = scrollY - space;
    var bottom = scrollY + space;

    if (
      document.querySelector("#main").offsetTop > top &&
      document.querySelector("#main").offsetTop < bottom
    )
      moveMargin(1);
    else if (
      document.querySelector("#about").offsetTop > top &&
      document.querySelector("#about").offsetTop < bottom
    )
      moveMargin(2);
    else if (
      document.querySelector("#projects").offsetTop > top &&
      document.querySelector("#projects").offsetTop < bottom
    )
      moveMargin(3);
  }
}

/* Scroll To Section */

const navLinks = document.querySelectorAll(".nav-menu li");
const hr = document.querySelector(".header .hr-container .hr");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    moveMargin(link.dataset.section);
    scrollToSection(link.dataset.section);
  });
});

function moveMargin(margin) {
  hr.className = "hr";
  margin = margin.toString();

  switch (margin) {
    case "2":
      hr.classList.add("second");
      break;
    case "3":
      hr.classList.add("third");
      break;
    case "4":
      hr.classList.add("fourth");
      break;
  }
}

function scrollToSection(id) {
  switch (id) {
    case "1":
      document.querySelector("#main").scrollIntoView();
      break;
    case "2":
      document.querySelector("#about").scrollIntoView();
      break;
    case "3":
      document.querySelector("#projects").scrollIntoView();
      break;
  }
}

/* Carousel Cards Rotation */

const projectsCards = document.querySelectorAll(".project");

projectsCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let elrect = card.getBoundingClientRect();
    let inY = e.clientY - elrect.top;
    let inX = e.clientX - elrect.left;
    let percentY = inY / card.clientHeight;
    let percentX = inX / card.clientWidth;

    let deviation = 6;

    card.style.transition = "0s ease transform";
    card.style.transform =
      "rotateX(" +
      -(percentY * deviation - deviation / 2) +
      "deg) rotateY(" +
      (percentX * deviation - deviation / 2) +
      "deg)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "0.3s ease transform";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

/* Scroll Reveal */

sr = ScrollReveal({
  origin: "bottom",
  distance: "15px",
  duration: 1000,
  reset: true,
});

// Main
sr.reveal(".motto", { origin: "left" });

// About
sr.reveal(".about .img-box", { origin: "right" });
sr.reveal(".about h1");
sr.reveal(".about p");
sr.reveal(".experiences-items .item", { interval: 50 });

// Projects
sr.reveal(".projects h1");
sr.reveal(".projects__button-box");
sr.reveal(".project-list");

// Mixitup

var mixer = mixitup(".project-list", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});
