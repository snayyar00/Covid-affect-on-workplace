"use strict";

window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  setTimeout(function () {
    preloader.classList.add('preloader-finish');
  }, 1500);
});