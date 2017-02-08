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
        backgroundColor: '#fff',
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
         ===  Custom Select                 ====
         =================================== */
        $('.custom-select').select2();
        $('.custom-select.no-search').select2({
            minimumResultsForSearch: -1
        });

        /* =================================
         ===  Clients                 ====
         =================================== */
        $('.main .clients').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 800,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

    });

})(window.jQuery);