$(document).foundation();

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
  navLinks.classList.add("show-mobile-menu");
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
  navLinks.classList.remove("show-mobile-menu");
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".sub-menu-1-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show-submenu-1");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show-more-submenu");
};
let jsArrow = document.querySelector(".sub-menu-2-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show-submenu-2");
};
