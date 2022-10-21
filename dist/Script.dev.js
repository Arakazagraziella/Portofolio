"use strict";

var header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.Toggle("sticky", window.scrollY > 0);
});
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onclick = function () {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = function () {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};
//# sourceMappingURL=Script.dev.js.map
