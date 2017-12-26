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

    /* =================================
     ===  Auto-hiding Topnav                 ====
     =================================== */
    var topNav = document.getElementById('top-nav');
    var headroom = new Headroom(topNav, {
        'tolerance': 5,
        'onPin' : function() {
            $(topNav).addClass('change-style');
        },
        'onUnpin' : function() {
            setTimeout(function () {
                $(topNav).removeClass('change-style');
            }, 400)
        },
        'onTop' : function() {
            $(topNav).removeClass('change-style');
        },
        'onBottom' : function() {
            $(topNav).addClass('change-style');
        },
        'onNotBottom' : function() {
            if(!$(topNav).hasClass('headroom--top')) {
                $(topNav).addClass('change-style');
            }
        }
    });
    headroom.init();


    /* =================================
     ===  Landing Slider                 ====
     =================================== */
    $('#landing-slider').masterslider({
        width: 1440,
        height: 786,
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


    /* =================================
     ===  Landing Promotions Carousel                 ====
     =================================== */
    $('.list-promotions').slick({
        infinite: true,
        speed: 1200,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
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
