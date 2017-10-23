"use strict";

var root = location + 'dist';
var preloader = new createjs.LoadQueue(false);
preloader.on("progress", function (e) {
  var perc = Math.round(e.progress * 100);
  document.getElementById('preloader-bar').style.width = perc + '%';
  document.getElementById('preloader').innerHTML = perc + '%';
}, this);
preloader.on("complete", function () {
  document.getElementById('wrap-preloader').style.opacity = 0;
  var s = document.createElement('script');
  s.setAttribute('src', root + '/scripts/main.js');
  document.body.appendChild(s);
  setTimeout(function () {
    document.body.removeChild(document.getElementById('wrap-preloader'));
  }, 500);
}, this);
preloader.loadManifest([
  root + '/styles/font-awesome.min.css',
  root + '/styles/fonts.css',
  root + '/images/logo.png',
  root + '/images/slide-1.jpg',
  root + '/scripts/TweenMax.min.js',
  root + '/scripts/jquery.min.js'
]);