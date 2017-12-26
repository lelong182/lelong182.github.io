import $ from 'jquery';
import AOS from 'aos';
import Headroom from 'headroom.js';

$.fn.customAnimate = function (effect, callback) {
    this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass(effect + ' animated');
        if (typeof callback === 'function') {
            callback.call(this);
        }
    });
};

$(window).on('load', function () {
    AOS.init();
    $('body').css('opacity', 1);
});

$(document).ready(function () {

    var orientation = '';
    window.addEventListener("orientationchange", function () {
        orientation = window.orientation === 0 ? 'portrait' : 'landscape';
        window.location.reload();
    }, false);

    /* =================================
     ===  Auto-hiding Topnav                 ====
     =================================== */
    var topNav = document.getElementById('top-nav');
    var headroom = new Headroom(topNav, {
        'tolerance': 5,
        'onPin': function () {
            $(topNav).addClass('change-style');
        },
        'onUnpin': function () {
            setTimeout(function () {
                $(topNav).removeClass('change-style');
            }, 400);
        },
        'onTop': function () {
            $(topNav).removeClass('change-style');
        },
        'onBottom': function () {
            $(topNav).addClass('change-style');
        },
        'onNotBottom': function () {
            if (!$(topNav).hasClass('headroom--top')) {
                $(topNav).addClass('change-style');
            }
        }
    });
    headroom.init();


    /* =================================
     ===  Topnav Mobile                 ====
     =================================== */
    $(this).on('click', '.top-nav .navbar-burger', function () {
        $('.top-nav').addClass('is-open');
        $('.top-nav .navbar-menu').css('top', $('.top-nav').outerHeight()).addClass('is-active');
        setTimeout(function () {
            $('.top-nav .navbar-menu').css('transform', 'translateY(0)');
            $('.wrapper').addClass('is-blur');
        }, 50);
    });
    $(this).on('click', '.top-nav .close-icon', function () {
        $('.top-nav .navbar-menu').css({
            'opacity': 0,
            'transition': 'all 0.3s ease'
        });
        $('.top-nav').removeClass('is-open');
        $('.wrapper').removeClass('is-blur');
        setTimeout(function () {
            $('.top-nav .navbar-menu').removeClass('is-active').removeAttr('style');
        }, 300);
    });


    /* =================================
     ===  Landing Slider                 ====
     =================================== */
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
        landingSlider(windowWidth - 50, 498);
    } else {
        landingSlider(1440, 768);
    }


    /* =================================
     ===  Landing Promotions Carousel                 ====
     =================================== */
    $('.list-promotions').slick({
        infinite: true,
        speed: 1200,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


    /* =================================
     ===  Top Nav Language Switcher                 ====
     =================================== */
    $(this).on({
        mouseover: function () {
            $('.lang-switch').addClass('open');
        },
        mouseleave: function () {
            $('.lang-switch').removeClass('open');
        }
    }, '.lang-switch-wrapper');


    /* =================================
     ===  Promotion Item Image Height                 ====
     =================================== */
    $(window).on('load resize', function () {
        $('.promotion-item__image').css('height', $('.promotion-item__image').width());
    });

});

function landingSlider(width, height) {
    $('#landing-slider').masterslider({
        width: width,
        height: height,
        view: 'parallaxMask',
        speed: 9,
        autoplay: true,
        instantStartLayers: true,
        layout: 'fullwidth',
        loop: true,
        controls: {
            arrows: {},
            bullets: {}
        }
    });
}
