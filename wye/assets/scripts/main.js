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
        backgroundColor: '#334d5c',
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
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('menu-item-has-children');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu menu-item-has-children');
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$(event.target).hasClass('minimal-menu-button')) {
                $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
            }
        });
        if (Modernizr.mq('(max-width: 857px)')) {
            $(this).on('click', '.menu > .menu-item-has-children > a', function () {
                if ($(this).hasClass('opened')) {
                    $(this).removeClass('opened');
                } else {
                    $('.menu > .menu-item-has-children > a').removeClass('opened');
                    $(this).addClass('opened');
                }
            });
        }


        /* =================================
         ===  List Clients                 ====
         =================================== */
        $('.list-clients').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
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


        /* =================================
         ===  List Testimonial                 ====
         =================================== */
        $('.testimonial .list-testi').slick({
            arrows: true,
            infinite: true,
            fade: true,
            autoplay: true,
            speed: 1000
        });


        /* =================================
         ===  List Clients Said                 ====
         =================================== */
        $('.clients-said .list-clients-said').slick({
            dots: true,
            arrows: false,
            infinite: true,
            fade: true,
            autoplay: true,
            speed: 1000
        });


        /* =================================
         ===  List Bottom Clients                 ====
         =================================== */
        $('.list-bottom-clients').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
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


        /* =================================
         ===  Business Slider                 ====
         =================================== */
        $('.wrap-small-business .wrap-slider .thumbs').slick({
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
        $(this).on('click', '.thumbs img', function () {
            var this_src = $(this).data('src');
            $('.main-img img').attr('src', this_src);
        });


        /* =================================
         ===  Our Other Packages                 ====
         =================================== */
        $('.other-packages .list-packages').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });


        /* =================================
         ===  List Bottom Clients                 ====
         =================================== */
        $('.list-other-cs').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            responsive: [
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