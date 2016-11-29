(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: "assets/images/logo.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function () {

        /* =================================
         ===  Sliders                 ====
         =================================== */
        $('#home-sliders').masterslider({
            width: 1920,
            height: 400,
            view: 'fade',
            space: 1,
            layout: 'fullwidth',
            loop: true,
            mouse: false,
            preload: 0,
            autoplay: true,
            controls: {
                bullets: {autohide: false},
                arrows: {autohide: false}
            }
        });

        /* =================================
         ===  Custom Select                 ====
         =================================== */
        $('.custom-select').select2();

    });

})(window.jQuery);