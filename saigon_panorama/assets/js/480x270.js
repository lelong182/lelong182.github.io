;(function ($) {

  "use strict";

  $(document).ready(function () {
    var options = {
      container: '.vne-rmd.container',
      googleMapKey: 'AIzaSyCkt8f0OEZn0pxbpLeTPQMZh1iNVWcA720'
    };

    /* =================================
     ===  Handle Tabs  ====
     =================================== */
    handleTabs(options);

    /* =================================
     ===  Handle Slides  ====
     =================================== */
    handleSlides({
      container: options.container,
      type: 'slide',
      autoPlay: true,
      autoPlayTime: 3
    });


    /* =================================
     ===  Handle Form  ====
     =================================== */
    handleForm(options.container);

  });
})(Zepto);