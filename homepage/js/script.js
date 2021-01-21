/* Loading */
$(window).on("load", function () {
  $("#loader").fadeOut("slow");
  $("#main span").css("-webkit-animation-play-state", "running"); //spuštění animace po načtení stránky
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

$("body").on("scroll", (e) => {
  changeHeader(e); //změní header když scrollneme níže

  changeSection(); // změní se položka v headeru, když nascroluji do patřičné section
});

function changeHeader(e) {
  var scroll_position = e.target.scrollTop;
  if (scroll_position > 200) {
    header.style.backgroundColor = "#1B212D";
    header.style.padding = "10px 0px";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "35px 0px";
  }
}
function changeSection() {
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
}
/* End Scroll Script */

/* HR margin script */
hr = document.querySelector(".header .hr-container hr");
function hr_margin(margin) {
  hr.style.marginLeft = margin + "%";
}
/* End HR margin script */
