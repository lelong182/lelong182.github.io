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

    $('.ms-bullets').wrap( "<div class='container'></div>" );
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
        // 'tolerance': 5,
        // 'onPin': function () {
        //     $(topNav).addClass('change-style');
        // },
        // 'onUnpin': function () {
        //     setTimeout(function () {
        //         $(topNav).removeClass('change-style');
        //     }, 400);
        // },
        'onTop': function () {
            $(topNav).removeClass('change-style');
        },
        'onNotTop': function () {
            $(topNav).addClass('change-style');
        },
        // 'onBottom': function () {
        //     $(topNav).addClass('change-style');
        // },
        // 'onNotBottom': function () {
        //     if (!$(topNav).hasClass('headroom--top')) {
        //         $(topNav).addClass('change-style');
        //     }
        // }
    });
    headroom.init();

    // var tmp = $('.ms-slide > img').data('src');
    // var tmpArr = tmp.split('.');
    // var ext = tmpArr.pop(-1);
    // tmpArr.push('-mobile', '.' + ext);
    // var str = tmpArr.join('');
    // console.log(tmpArr);
    // console.log(str);
    // $('.ms-slide > img').data('src', str);


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
        $('.ms-slide .desktop').remove();
        landingSlider(windowWidth - 50, 498);
    } else {
        $('.ms-slide .mobile').remove();
        landingSlider(1440, 850);
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


    /* =================================
     ===  Modal box                 ====
     =================================== */
    $(this).on('click', '.modal-background', function () {
        $('.modal').fadeOut(400, function () {
            $(this).removeClass('is-active');
        });
    });
    $(this).on('click', '.download-link', function () {
        $('.download-link-modal').addClass('is-active').hide().fadeIn(600);
    });
    $(this).on('click', '.download-link-modal button[type="submit"]', function () {
        $('.download-link-modal').fadeOut(400, function () {
            $(this).removeClass('is-active');
            $('.link-sent-modal').addClass('is-active').hide().fadeIn(600);
        });
        return false;
    });

});

function landingSlider(width, height) {
    $('#landing-slider').masterslider({
        width: width,
        height: height,
        view: 'parallaxMask',
        speed: 18,
        autoplay: false,
        instantStartLayers: true,
        layout: 'fullwidth',
        loop: true,
        controls: {
            arrows: {},
            bullets: {
                autohide: false,
                margin: 0
            }
        }
    });
}
