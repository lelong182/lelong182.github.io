"use strict";

var preloader = new createjs.LoadQueue(false);
preloader.on("progress", function (e) {
  var perc = Math.round(e.progress * 100);
  document.getElementById('preloader-bar').style.width = perc + '%';
  document.getElementById('preloader').innerHTML = perc + '%';
}, this);
preloader.on("complete", function () {
  document.getElementById('wrap-preloader').style.opacity = 0;
  setTimeout(function () {
    document.body.removeChild(document.getElementById('wrap-preloader'));
  }, 500);
}, this);
preloader.loadManifest({src:'manifest.json', type:'manifest'});