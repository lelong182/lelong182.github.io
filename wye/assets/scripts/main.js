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
            mySticky('label.minimal-menu-button', 25);
            $(this).on('click', 'label.minimal-menu-button', function () {
                if($('input.minimal-menu-button:checked').length) {
                    $('.black-overlay').remove();
                } else {
                    $('body').prepend('<div class="black-overlay"></div>');
                }
            });
        }


        /* =================================
         ===  Custom Scroll                 ====
         =================================== */
        $('.has-scroll').perfectScrollbar();


        /* =================================
         ===  Top Search                 ====
         =================================== */
        $(this).on('click', '.cart-menu .search-btn', function () {
            var search_form = $('.cart-menu .search-form');
            if(search_form.hasClass('open')) {
                search_form.removeClass('open');
            } else {
                search_form.addClass('open');
            }
            return false;
        });
        $(document).on('mouseup', 'body', function (e) {
            var container = $('.cart-menu .search-form');
            if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.cart-menu .search-btn').is(e.target)) {
                container.removeClass('open');
            }
        });


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
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
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
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
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
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
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
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
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
                    breakpoint: 1399,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });


    });

})(window.jQuery);

var ctrl = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene();
function mySticky(selector, options) {
    if ($(selector).length) {
        var offset = 0;
        var side = '';
        var side_val = 0;
        if (typeof options == 'number') {
            offset = options;
        } else {
            offset = options[Object.keys(options)[0]];
            side = Object.keys(options)[1];
            side_val = options[Object.keys(options)[1]];
        }
        var this_position_type = $(selector).css('position');
        $(selector).removeAttr('style');
        scene
            .offset(offset)
            .on("enter", function () {
                $(selector).addClass('is-sticky');
                if (side == 'left') {
                    $(selector).css({
                        position: 'fixed',
                        left: side_val
                    });
                } else if (side == 'right') {
                    $(selector).css({
                        position: 'fixed',
                        right: side_val
                    });
                } else {
                    $(selector).css({
                        position: 'fixed'
                    });
                }
            })
            .on("leave", function () {
                $(selector).removeClass('is-sticky');
                if (side == 'left') {
                    $(selector).css({
                        position: this_position_type,
                        left: 'initial'
                    });
                } else if (side == 'right') {
                    $(selector).css({
                        position: this_position_type,
                        right: 'initial'
                    });
                } else {
                    $(selector).css({
                        position: this_position_type
                    });
                }
            })
            .addTo(ctrl);
        if (offset < 0) {
            ctrl.enabled(false);
            scene.enabled(false);
        } else {
            ctrl.enabled(true);
            scene.enabled(true);
        }
        scene.update(true);
        ctrl.update(true);
    }
}