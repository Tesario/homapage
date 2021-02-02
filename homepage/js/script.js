/* Loading */
$(window).on("load", function () {
  $("#loader").fadeOut("slow");
  $("#main .inscription span").css("-webkit-animation-play-state", "running"); //spuštění animace po načtení stránky
  $("#main .inscription").css("-webkit-animation-play-state", "running");
});
/* End Loading */

/* Timetable Script */
var tt_odd = document.querySelector(".tt-odd", "tt-odd tr", "tt_odd tr td, th");
var tt_even = document.querySelector(
  ".tt-even",
  "tt-even tr",
  "even tr td, th"
);

Date.prototype.getWeekNumber = function () {
  var d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  );
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

var today = new Date();
today.setDate(today.getDate() - 2); //přičtení o x dní => v sobotu se zobrazí rozvrch pro další týden
if (today.getWeekNumber() % 2 == 0) {
  tt_odd.style.display = "none";
} else {
  tt_even.style.display = "none";
}

function change(id_of_week) {
  if (id_of_week == true) {
    tt_even.style.animation = "restart";
    tt_odd.style.animation = "restart";
    tt_odd.style.animation = "anim_opacity 1s";
    setTimeout(() => {
      tt_odd.style.display = "none";
      tt_even.style.display = "table";
    }, 500);
    tt_even.style.animation = "restart";
    tt_even.style.animation = "anim_opacity_back 1s";
  } else {
    tt_even.style.animation = "restart";
    tt_odd.style.animation = "restart";
    tt_even.style.animation = "anim_opacity 1s";
    setTimeout(() => {
      tt_odd.style.display = "table";
      tt_even.style.display = "none";
    }, 500);
    tt_odd.style.animation = "restart";
    tt_odd.style.animation = "anim_opacity_back 1s";
  }
}
/* End Timetable Script */

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
/* End Click Hamburger Script */

/* Scroll Script*/
var scroll_deactive = false;
header = document.querySelector(".header");

// Když kliknu na nějakou položku v headeru -> na chvíli znepřístupní funkci changeSection()
$(".nav-menu > li").click(() => {
  scroll_deactive = true;
  setTimeout(() => {
    scroll_deactive = false;
  }, 500);
});

$(window).on("scroll", () => {
  changeHeader(window.scrollY); //změní header když scrollneme níže
  changeSection(window.scrollY); // změní se položka v headeru, když nascroluji do patřičné section
});
console.log($("#about").offset().top);
function changeHeader(scrollY) {
  var scroll_position = scrollY;
  if (scroll_position > 200) {
    header.style.backgroundColor = "#1B212D";
    header.style.padding = "10px 0px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "35px 0px";
  }
}
function changeSection(scrollY) {
  if (!scroll_deactive) {
    var space = 300;
    var top = scrollY - space;
    var bottom = scrollY + space;
    if ($("#main").offset().top > top && $("#main").offset().top < bottom)
      hr_margin(0);
    else if (
      $("#about").offset().top > top &&
      $("#about").offset().top < bottom
    )
      hr_margin(25);
    else if (
      $("#school").offset().top > top &&
      $("#school").offset().top < bottom
    )
      hr_margin(50);
    else if (
      $("#other").offset().top > top &&
      $("#other").offset().top < bottom
    )
      hr_margin(75);
  }
}
/* End Scroll Script */

/* HR margin script */
hr = document.querySelector(".header .hr-container hr");
function hr_margin(margin) {
  hr.style.marginLeft = margin + "%";
}
/* End HR margin script */

/* Scroll Reveal */
sr = ScrollReveal({
  origin: "top",
  distance: "10px",
  duration: 2000,
  reset: true,
});

// All
sr.reveal("section > div > h1", { delay: 100 });

// Header
sr.reveal("#header", { delay: 200 });

// Main
sr.reveal(".motto", { delay: 10, origin: "left" });

// About
sr.reveal(".about .img-box", { delay: 200, origin: "right" });
sr.reveal(".info-box h1", { delay: 100 });
sr.reveal(".info-box p", { delay: 200 });
sr.reveal(".info-box h2", { delay: 300 });
sr.reveal(".language-items a", { delay: 400, interval: 200 });

// School
sr.reveal(".project", {
  delay: 200,
  interval: 200,
  origin: "left",
});
sr.reveal(".timetable", {
  delay: 300,
  origin: "right",
});
sr.reveal(".notes", {
  delay: 400,
  origin: "right",
});

// Other
sr.reveal(".project-container a", {
  delay: 100,
  interval: 100,
});

// Footer
sr.reveal(".footer > p", {
  delay: 50,
  origin: "bottom",
});
/* End Scroll Reveal */
