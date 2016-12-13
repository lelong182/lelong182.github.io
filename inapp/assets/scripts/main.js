(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: "dist/images/logo.png",
        backgroundColor: '#4c4c4c',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function () {
        /* =================================
         ===  Minimal Menu                 ====
         =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$(event.target).hasClass('minimal-menu-button')) {
                $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
            }
        });
        if (Modernizr.mq('(max-width: 991px)')) {
            $(this).on('click', '.menu > .submenu > a', function() {
                if($(this).hasClass('opened')) {
                    $(this).removeClass('opened');
                } else {
                    $('.menu > .submenu > a').removeClass('opened');
                    $(this).addClass('opened');
                }
            });
        }


        /* =================================
         ===  Sliders                 ====
         =================================== */
        $('#home-sliders').masterslider({
            width: 1368,
            height: 767,
            view: 'fade',
            space: 1,
            layout: 'fullwidth',
            loop: true,
            mouse: false,
            preload: 0,
            autoplay: false,
            controls: {
                arrows: {autohide: false}
            }
        });

    });

})(window.jQuery);