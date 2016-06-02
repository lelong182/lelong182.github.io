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
        CSSPlugin.defaultTransformPerspective = 800;
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
            $creationsection_paper1 = $('.creation-section .paper-1'),
            $creationsection_paper2 = $('.creation-section .paper-2'),
            $creationsection_paper3 = $('.creation-section .paper-3'),
            $creationsection_paper4 = $('.creation-section .paper-4'),
            $creationsection_pen1 = $('.creation-section .pen-1'),
            $creationsection_pic1 = $('.creation-section .pic-1'),
            $creationsection_pic2 = $('.creation-section .pic-2'),
            $creationsection_txt1 = $('.creation-section .txt-1'),
            $creationsection_txt2 = $('.creation-section .txt-2'),
            $creationsection_btn1 = $('.creation-section .btn-1'),
            $createmagicsection_wraplastpaper = $('.create-magic-section .wrap-last-paper'),
            $createmagicsection_wraplastpaper_pic2 = $('.create-magic-section .wrap-last-paper .pic-2'),
            $createmagicsection_paper1 = $('.create-magic-section .paper-1'),
            $createmagicsection_iron = $('.create-magic-section .iron'),
            $createmagicsection_shirt3_shirt = $('.create-magic-section .shirt-3 .shirt'),
            $createmagicsection_shirt3_pic = $('.create-magic-section .shirt-3 .pic'),
            $createmagicsection_shirt1 = $('.create-magic-section .shirt-1'),
            $createmagicsection_shirt2 = $('.create-magic-section .shirt-2'),
            $createmagicsection_txt1 = $('.create-magic-section .txt-1'),
            $createmagicsection_txt2 = $('.create-magic-section .txt-2'),
            $createmagicsection_txt3 = $('.create-magic-section .txt-3'),
            $createmagicsection_btn1 = $('.create-magic-section .btn-1'),
            $collectionsection_bottombg = $('.collection-section .bottom-bg'),
            $productsection_txt1 = $('.product-section .txt-1'),
            $productsection_wrapproducts = $('.product-section .wrap-products'),
            $productsection_wrapcontact = $('.product-section .wrap-contact'),
            $footer = $('.footer');

        var ctrl = new ScrollMagic.Controller();

        var magicpensectionTL = new TimelineMax({
                paused: true
            }),
            creationsectionTL = new TimelineMax(),
            createmagicsectionTL = new TimelineMax(),
            collectionsectionTL = new TimelineMax(),
            productsectionTL = new TimelineMax();

        magicpensectionTL
            .fromTo($magicpensection_pen1, 0.5, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            }, '+=0.7')
            .fromTo($magicpensection_pen2, 0.5, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            })
            .fromTo($magicpensection_pen3, 0.5, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            })
            .fromTo($magicpensection_pen4, 0.5, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            })
            .fromTo($magicpensection_pen5, 0.5, {
                x: 300,
                y: -200,
                autoAlpha: 0
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.7)
            })
            .fromTo($magicpensection_txt1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.5')
            .fromTo($magicpensection_txt2, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($magicpensection_btn1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .to($magicpensection_pen21, 0.4, {
                x: '-' + percentToPixel($magicpensection_pen21, 22.5) + 'px',
                y: percentToPixel($magicpensection_pen21, 3.8) + 'px',
                ease: Elastic.easeIn.config(0.5, 1)
            }, '+=0.5');
        creationsectionTL
            .fromTo($creationsection_paper1, 0.5, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.2)
            })
            .fromTo($creationsection_paper2, 0.5, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.2)
            }, '-=0.1')
            .fromTo($creationsection_paper3, 0.5, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.2)
            }, '-=0.1')
            .fromTo($creationsection_paper4, 0.5, {
                x: -200,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1.2)
            }, '-=0.1')
            .fromTo($creationsection_pen1, 4, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                bezier: {
                    type: "soft",
                    values: [{
                        x: -300,
                        y: 100
                    }, {
                        x: -200,
                        y: -150
                    }, {
                        x: -300,
                        y: -100
                    }, {
                        x: -180,
                        y: -10
                    }, {
                        x: -130,
                        y: -20
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Power2.easeInOut
            }, '-=0.8')
            .fromTo($creationsection_pic1, 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeIn
            }, '-=2.3')
            .fromTo($creationsection_pic2, 1, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeIn
            }, '-=1.3')
            .fromTo($creationsection_txt1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=1.7')
            .fromTo($creationsection_txt2, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.8')
            .fromTo($creationsection_btn1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3');
        createmagicsectionTL
            .fromTo($createmagicsection_shirt3_shirt, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '+=0.2')
            .fromTo($createmagicsection_wraplastpaper, 1.3, {
                y: -600,
                x: 200,
                autoAlpha: 0
            }, {
                y: 0,
                x: 0,
                autoAlpha: 1,
                ease: Back.easeIn.config(0.8)
            }, '-=0.3')
            .fromTo($createmagicsection_iron, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .to($createmagicsection_wraplastpaper, 1, {
                rotationY: 180,
                transformOrigin: "100% 0%",
                ease: Linear.easeNone
            })
            .set($createmagicsection_wraplastpaper_pic2, {
                autoAlpha: 0
            }, "-=0.5")
            .to($createmagicsection_iron, 3.5, {
                bezier: {
                    type: "soft",
                    values: [{
                        x: -300,
                        y: 150
                    }, {
                        x: -200,
                        y: 0
                    }, {
                        x: -100,
                        y: -100
                    }, {
                        x: 100,
                        y: -80
                    }, {
                        x: 50,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }]
                },
                ease: Power2.easeInOut
            })
            .to($createmagicsection_wraplastpaper, 1, {
                autoAlpha: 0,
                y: 150,
                x: -50,
                ease: Power4.easeOut
            }, '-=0.2')
            .fromTo($createmagicsection_shirt3_pic, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.7')
            .fromTo($createmagicsection_paper1, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.4')
            .fromTo($createmagicsection_shirt1, 0.8, {
                autoAlpha: 0,
                scale: 0
            }, {
                autoAlpha: 1,
                scale: 1,
                ease: Power2.easeOut
            }, '-=0.1')
            .fromTo($createmagicsection_shirt2, 0.8, {
                autoAlpha: 0,
                scale: 0
            }, {
                autoAlpha: 1,
                scale: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($createmagicsection_txt1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.5')
            .fromTo($createmagicsection_txt2, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($createmagicsection_txt3, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($createmagicsection_btn1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.3');
        collectionsectionTL
            .fromTo($collectionsection_bottombg, 0.7, {
                y: -200,
            }, {
                y: 0,
                ease: Back.easeOut.config(1.3)
            }, '+=0.5');
        productsectionTL
            .fromTo($productsection_txt1, 0.7, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            })
            .fromTo($productsection_wrapproducts, 0.8, {
                scale: 0,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.2')
            .fromTo($productsection_wrapcontact, 0.8, {
                scale: 0,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.3')
            .fromTo($footer, 1, {
                x: -300,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(0.6)
            }, '-=0.3');

        new ScrollMagic.Scene({
            triggerElement: $('.creation-section')[0]
        })
            .setTween(creationsectionTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.create-magic-section')[0]
        })
            .setTween(createmagicsectionTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.collection-section')[0]
        })
            .setTween(collectionsectionTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.product-section')[0]
        })
            .setTween(productsectionTL)
            .addTo(ctrl);

        $(window).on('load', function() {
            magicpensectionTL.play();
        });


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
            responsiveWidth: 858,
            afterLoad: function(anchorLink, index) {
                if (index === 1) {
                    magicpensectionTL.restart();
                }
            }
        });
        $('.magic-pen-section .btn-1').click(function() {
            $.fn.fullpage.moveTo('creation-section', 0);
        });
        $('.creation-section .btn-1').click(function() {
            $.fn.fullpage.moveTo('create-magic-section', 0);
        });
        $('.create-magic-section .btn-1').click(function() {
            $.fn.fullpage.moveTo('collection-section', 0);
        });


    });
})(window.jQuery);

function percentToPixel(_elem, _perc) {
    return (_elem.parent().outerWidth() / 100) * parseFloat(_perc);
}