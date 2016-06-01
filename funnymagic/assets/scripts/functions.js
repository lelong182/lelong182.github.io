(function($) {

    "use strict";

    $.fn.adtop_animation = function(effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    window.loading_screen = window.pleaseWait({
        logo: "assets/images/logo.png",
        backgroundColor: '#e14fd5',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function() {

        /* =================================
        ===  Minimal Menu                 ====
        =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
        $('.minimal-menu').find('div.menu-wrapper').before('<input class=\"show-submenu\" type=\"checkbox\" />');


        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
        ===  FullPage                 ====
        =================================== */
        $('#fullpage').fullpage({
            anchors: ['magic-pen-section', 'creation-section', 'create-magic-section', 'collection-section', 'product-section'],
            menu: '.main-nav .menu',
            verticalCentered: false,
            css3: false,
            scrollingSpeed: 1000,
            fitToSection: false,
            responsiveWidth: 858
        });


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        $("header.header").sticky({
            topSpacing: 0
        });


        /* =================================
         ===  Custom Carousel                 ====
         =================================== */
        if ($('.list-imgs').length) {
            $('.list-imgs').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, {
                    breakpoint: 858,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true
                    }
                }]
            });
        }


        /* =================================
        ===  ScrollMagic with GSAP                 ====
        =================================== */
        var wh = window.innerHeight,
            $magicpensection_pen1 = $('.magic-pen-section .pen-1'),
            $magicpensection_pen2 = $('.magic-pen-section .pen-2'),
            $magicpensection_pen21 = $('.magic-pen-section .pen-21'),
            $magicpensection_pen3 = $('.magic-pen-section .pen-3'),
            $magicpensection_pen4 = $('.magic-pen-section .pen-4'),
            $magicpensection_pen5 = $('.magic-pen-section .pen-5'),
            $magicpensection_txt1 = $('.magic-pen-section .txt-1'),
            $magicpensection_txt2 = $('.magic-pen-section .txt-2'),
            $magicpensection_btn1 = $('.magic-pen-section .btn-1'),
            $footer = $('.footer');

        var ctrl = new ScrollMagic.Controller();

        var magicpensectionTL = new TimelineMax({
            paused: true
        });

        magicpensectionTL
            .fromTo($magicpensection_pen1, 0.4, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '+=0.7')
            .fromTo($magicpensection_pen2, 0.4, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '-=0.1')
            .fromTo($magicpensection_pen3, 0.4, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '-=0.1')
            .fromTo($magicpensection_pen4, 0.4, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '-=0.1')
            .fromTo($magicpensection_pen5, 0.4, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '-=0.1')
            .fromTo($magicpensection_txt1, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.5')
            .fromTo($magicpensection_txt2, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($magicpensection_btn1, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .to($magicpensection_pen21, 0.4, {
                x: -246,
                y: 42,
                ease: Elastic.easeIn.config(0.5, 1)
            }, '+=0.5');


        // new ScrollMagic.Scene({
        //     triggerElement: $('.utility')[0]
        // })
        //     .setTween(utilityTL)
        //     .addTo(ctrl);

        $(window).on('load', function() {
            magicpensectionTL.play();
        });


    });
})(window.jQuery);