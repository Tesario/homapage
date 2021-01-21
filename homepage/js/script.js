/* Loading */
$(window).on("load", function () {
  $("#loader").fadeOut("slow");
  $("#main span").css("-webkit-animation-play-state", "running"); //spuštění animace po načtení stránky
});
/* End Loading */

/* Find Language Script*/
var language_address = [
  "https://cs.wikipedia.org/wiki/PHP",
  "https://cs.wikipedia.org/wiki/JQuery",
  "https://cs.wikipedia.org/wiki/Hypertext_Markup_Language",
  "https://cs.wikipedia.org/wiki/Kask%C3%A1dov%C3%A9_styly",
  "https://cs.wikipedia.org/wiki/JavaScript",
  "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
  "https://cs.wikipedia.org/wiki/MySQL",
  "https://cs.wikipedia.org/wiki/Git",
];
function find(index) {
  location.href = language_address[index];
}
/* End Find Language Script*/

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

/* Find Project Script*/
var project_address = [
  "http://tesario.4fan.cz/homepage/other/cookie_clicker",
  "http://tesario.4fan.cz/mainpage/other/prevody/",
  "http://tesario.4fan.cz/index2.htm",
  "http://tesario.4fan.cz/index.php",
  "http://tesario.4fan.cz/bistro/",
  "http://tesario.4fan.cz/mainpage/other/websecss/",
  "http://tesario.4fan.cz/homepage/other/snake/",
  "http://tesario.4fan.cz/mainpage/other/piskvorky/",
  "http://tesario.4fan.cz/mainpage/other/knp/",
  "http://tesario.4fan.cz/homepage/other/growlage/",
  "http://tesario.4fan.cz/mainpage/other/koule/",
];
function find_project(index) {
  location.href = project_address[index];
}
/* End Find Project Script*/

/* Find School Project Script*/
var school_project_address = [
  "https://www.netacad.com/",
  "http://tesario.4fan.cz/homepage/other/school/",
  "http://tesario.4fan.cz/homepage/nodes/poznamky/",
  "https://www.spst.cz/",
];
function find_school_project(index) {
  location.href = school_project_address[index];
}
/* End Find School Project Script*/

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
$(".nav-menu > li").click(() => {
  scroll_deactive = true;
  setTimeout(() => {
    scroll_deactive = false;
  }, 500);
});

header = document.querySelector(".header");
$("body").on("scroll", (e) => {
  var scroll_position = e.target.scrollTop;
  if (scroll_position > 200) {
    header.style.backgroundColor = "#1B212D";
    header.style.padding = "10px 30px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "35px 30px";
  }
  if (!scroll_deactive) {
    var max = 200;
    var min = -200;
    if ($("#main").offset().top < max && $("#main").offset().top > min)
      hr_margin(0);
    else if ($("#about").offset().top < max && $("#about").offset().top > min)
      hr_margin(25);
    else if ($("#school").offset().top < max && $("#school").offset().top > min)
      hr_margin(50);
    else if ($("#other").offset().top < max && $("#other").offset().top > min)
      hr_margin(75);
  }
});
/* End Scroll Script */

/* HR margin script */
hr = document.querySelector(".header .hr-container hr");
function hr_margin(margin) {
  hr.style.marginLeft = margin + "%";
}
/* End HR margin script */

/* Evaluation Section */
var random = Math.floor(Math.random() * 6);
if (random > 3) {
  var evaluation = document.querySelector("#evaluation");
  window.addEventListener("load", () => {
    evaluation.style.right = "0%";
  });
  var p = document.querySelector(".evaluation p");
  var stars = document.querySelector(".evaluation .star-container");
  function send(reaction) {
    p.style.opacity = "0";
    stars.style.opacity = "0";
    setInterval(() => {
      stars.style.display = "none";
    }, 300);
    setInterval(() => {
      if (reaction == "heart") {
        p.innerHTML = "Díky❤️";
      } else if (reaction == "none") {
        p.innerHTML = "Díky";
      } else {
        p.innerHTML = "Díky😢";
      }
      p.style.fontSize = "5rem";
      p.style.width = "100%";
    }, 300);
    setInterval(() => {
      p.style.opacity = "1";
    }, 500);
    setInterval(() => {
      evaluation.style.right = "-100%";
    }, 2000);
  }
}
/* End Evaluation Section */
