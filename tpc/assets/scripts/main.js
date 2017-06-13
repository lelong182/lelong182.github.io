(function ($) {

  "use strict";

  $.fn.customAnimate = function (effect, callback) {
    this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass(effect + ' animated');
      if (typeof callback === 'function') {
        callback.call(this);
      }
    });
  };

  window.loading_screen = window.pleaseWait({
    logo: "dist/images/logo.png",
    backgroundColor: '#6d0017',
    loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
  });

  $(window).on('load', function () {
    window.loading_screen.finish();
    $('body').css('opacity', 1);
  });

  $(document).ready(function () {

    /* =================================
     ===  Select2                 ====
     =================================== */
    $('.custom-select').select2();
    $('.custom-select.no-search').select2({
      minimumResultsForSearch: -1
    });

  });

})(window.jQuery);