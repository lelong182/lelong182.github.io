(function ($) {

    "use strict";

    $(document).ready(function () {



        /* =================================
        ===  Carousel                 ====
        =================================== */
        $(window).on('load resize', function () {
            productCarousel();
        });


        /* =================================
        ===  Animation                 ====
        =================================== */
        if (Modernizr.mq('(min-width: 858px)')) {
            var galaxy = $('.galaxy'),
                home_spaceship = $('.wrap-home .spaceship-characters'),
                home_path = $('.wrap-home .path'),
                home_shuttle = $('.wrap-home .shuttle'),
                home_boxes = $('.wrap-home .boxes'),
                home_bracelets = $('.wrap-home .bracelets'),
                home_rulers = $('.wrap-home .rulers'),
                home_collect = $('.wrap-home .collect'),
                character_globe = $('.wrap-characters .globe-icon'),
                character_on_characters = $('.wrap-characters .character-item .character'),
                info_on_characters = $('.wrap-characters .character-item .info'),
                product_img = $('.list-products .img-wrapper img'),
                promotion_globe = $('.wrap-promotion .globe'),
                promotion_collect_text = $('.wrap-promotion .globe .collect-text'),
                promotion_box_1 = $('.wrap-promotion .promotion-1 .box'),
                promotion_gift_1 = $('.wrap-promotion .promotion-1 .gift'),
                promotion_box_2 = $('.wrap-promotion .promotion-2 .box'),
                promotion_gift_2 = $('.wrap-promotion .promotion-2 .gift'),
                promotion_gilbert = $('.wrap-promotion .gilbert');

            var arr_selectors = [
            galaxy, home_spaceship, home_path, home_shuttle, home_boxes, home_bracelets,
            home_rulers, home_collect, character_globe, character_on_characters,
            info_on_characters, product_img, promotion_globe, promotion_collect_text,
            promotion_box_1, promotion_gift_1, promotion_box_2, promotion_gift_2, promotion_gilbert
        ];

            var galaxyTL = new TimelineMax({
                    paused: true,
                    repeat: -1
                }),
                homeTL = new TimelineMax({
                    paused: true
                }),
                characterTL = new TimelineMax({
                    paused: true
                }),
                productTL = new TimelineMax({
                    paused: true
                }),
                promotionTL = new TimelineMax({
                    paused: true
                });

            galaxyTL.to(galaxy, 70, {
                backgroundPosition: '3840px 0',
                ease: Power0.easeOut
            });

            homeTL
                .fromTo(home_spaceship, 0.8, {
                    opacity: 0,
                    x: '-=200'
                }, {
                    opacity: 1,
                    x: 0,
                    ease: Back.easeOut.config(1.5)
                }, 1)
                .set(home_spaceship, {
                    className: "+=animated"
                }, '+=0.5')
                .fromTo(home_shuttle, 2, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    bezier: {
                        type: 'soft',
                        values: [{
                            x: '+=' + percentToPixel(home_shuttle, 10),
                            y: '-=' + percentToPixel(home_shuttle, 10),
                            rotation: 90
                                }, {
                            x: '+=' + percentToPixel(home_shuttle, 20),
                            y: '+=' + percentToPixel(home_shuttle, 10),
                            rotation: 70
                                }, {
                            x: '+=' + percentToPixel(home_shuttle, 32),
                            y: '+=' + percentToPixel(home_shuttle, 6),
                            rotation: 0
                                }]
                    },
                    ease: Power4.easeOut
                }, '-=0.7')
                .fromTo(home_path, 0.6, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: Power4.easeIn
                }, '-=1.6')
                .fromTo(home_boxes, 0.6, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.7)
                }, '-=1')
                .fromTo(home_bracelets, 0.6, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.7)
                }, '-=1.3')
                .fromTo(home_rulers, 0.6, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.7)
                }, '-=0.7')
                .fromTo(home_collect, 0.5, {
                    opacity: 0,
                    scale: 4
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                }, '-=0.4');

            characterTL
                .fromTo(character_globe, 0.6, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.5)
                }, 1)
                .staggerFromTo(character_on_characters, 0.9, {
                    opacity: 0,
                    y: '-=80'
                }, {
                    opacity: 1,
                    y: 0,
                    ease: Elastic.easeOut.config(1, 0.3)
                }, 0.3)
                .staggerFromTo(info_on_characters, 0.6, {
                    opacity: 0,
                    x: '+=150'
                }, {
                    opacity: 1,
                    x: 0,
                    ease: Back.easeOut.config(1.7)
                }, 0.2, '-=0.8');

            productTL.staggerFromTo(product_img, 0.5, {
                opacity: 0,
                scale: 0.5
            }, {
                opacity: 1,
                scale: 1,
                ease: Back.easeOut.config(1.5)
            }, 0.1, 1);

            promotionTL
                .fromTo(promotion_globe, 0.6, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.5)
                }, 1)
                .fromTo(promotion_collect_text, 0.5, {
                    opacity: 0,
                    scale: 4
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut
                }, '-=0.1')
                .fromTo(promotion_gilbert, 0.6, {
                    opacity: 0,
                    x: '+=' + percentToPixel(promotion_gilbert, 30),
                    y: '+=' + percentToPixel(promotion_gilbert, 50)
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: Sine.easeOut
                }, '-=0.1')
                .fromTo(promotion_box_1, 0.4, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.5)
                }, '-=0.2')
                .fromTo(promotion_gift_1, 0.6, {
                    opacity: 0,
                    scale: 1.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.3)
                })
                .fromTo(promotion_box_2, 0.4, {
                    opacity: 0,
                    scale: 0.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.5)
                }, '-=0.3')
                .fromTo(promotion_gift_2, 0.6, {
                    opacity: 0,
                    scale: 1.5
                }, {
                    opacity: 1,
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.3)
                });

            $(window).on('load', function () {
                galaxyTL.play();
                homeTL.play();
                characterTL.play();
                productTL.play();
                promotionTL.play();
            });
        }
        //        $(window).on('load resize', function () {
        //            if (Modernizr.mq('(max-width: 857px)')) {
        //                galaxyTL.remove();
        //                galaxyTL.clear();
        //                homeTL.remove();
        //                homeTL.clear();
        //                characterTL.remove();
        //                characterTL.clear();
        //                productTL.remove();
        //                productTL.clear();
        //                promotionTL.remove();
        //                promotionTL.clear();
        //                $.each(arr_selectors, function (index, val) {
        //                    TweenLite.set(val, {
        //                        clearProps: "all"
        //                    });
        //                });
        //            }
        //        });


        /* =================================
        ===  Ajax Load Page                 ====
        =================================== */
        $(this).on('click', '.top-menu a[href], .logo a', function (e) {
            e.preventDefault();
            var lnk = $(this).attr('href');
            $.ajax({
                url: lnk,
                success: function (res) {
                    var dom = $('<div></div>').html(res);
                    $('title').text(dom.find('title').text());
                    $('.wrapper').html(dom.html());
                    if (Modernizr.mq('(min-width: 858px)')) {
                        setTimeout(function () {
                            commonFunctions();
                        }, 100);
                    }
                    history.pushState(null, null, lnk);
                }
            }).done(function () {
                if (Modernizr.mq('(min-width: 858px)')) {
                    if (lnk === 'index.html') {
                        homePage();
                    } else if (lnk === 'character.html') {
                        characterPage();
                    } else if (lnk === 'product.html') {
                        productPage();
                    } else if (lnk === 'promotion.html') {
                        promotionPage();
                    }
                }
            });
        });

    });

})(window.jQuery);

function commonFunctions() {
    $(document).on('click', '.bottom-info .label-bottom-info', function () {
        var this_parent = $(this).parent();
        if (this_parent.hasClass('opened')) {
            this_parent.removeClass('opened');
            this_parent.removeAttr('style');
        } else {
            this_parent.addClass('opened');
            this_parent.css({
                bottom: 0
            });
        }
        return false;
    });
    $(document).on('click', '.top-menu .contact-menu a', function () {
        var bottom_info = $('.bottom-info');
        if (bottom_info.hasClass('opened')) {
            bottom_info.removeClass('opened');
            bottom_info.removeAttr('style');
        } else {
            bottom_info.addClass('opened');
            bottom_info.css({
                bottom: 0
            });
        }
        return false;
    });

    $(document).on('mouseup', 'body', function (event) {
        if (!$('.bottom-info').is(event.target) && $('.bottom-info').has(event.target).length === 0 && !$('.top-menu .contact-menu a').is(event.target)) {
            $('.bottom-info').removeClass('opened');
            $('.bottom-info').removeAttr('style');
        }
    });
}

function homePage() {
    var galaxy = $('.galaxy'),
        home_path = $('.wrap-home .path'),
        home_spaceship = $('.wrap-home .spaceship-characters'),
        home_shuttle = $('.wrap-home .shuttle'),
        home_boxes = $('.wrap-home .boxes'),
        home_bracelets = $('.wrap-home .bracelets'),
        home_rulers = $('.wrap-home .rulers'),
        home_collect = $('.wrap-home .collect');

    var galaxyTL = new TimelineMax({
            repeat: -1
        }),
        homeTL = new TimelineMax();

    galaxyTL.to(galaxy, 70, {
        backgroundPosition: '3840px 0',
        ease: Power0.easeOut
    });

    homeTL
        .fromTo(home_spaceship, 0.8, {
            opacity: 0,
            x: '-=200'
        }, {
            opacity: 1,
            x: 0,
            ease: Back.easeOut.config(1.5)
        }, 0.5)
        .set(home_spaceship, {
            className: "+=animated"
        }, '+=0.5')
        .fromTo(home_shuttle, 2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            bezier: {
                type: 'soft',
                values: [{
                    x: '+=' + percentToPixel(home_shuttle, 10),
                    y: '-=' + percentToPixel(home_shuttle, 10),
                    rotation: 90
                                }, {
                    x: '+=' + percentToPixel(home_shuttle, 20),
                    y: '+=' + percentToPixel(home_shuttle, 10),
                    rotation: 70
                                }, {
                    x: '+=' + percentToPixel(home_shuttle, 32),
                    y: '+=' + percentToPixel(home_shuttle, 6),
                    rotation: 0
                                }]
            },
            ease: Power4.easeOut
        }, '-=0.7')
        .fromTo(home_path, 0.6, {
            opacity: 0
        }, {
            opacity: 1,
            ease: Power4.easeIn
        }, '-=1.6')
        .fromTo(home_boxes, 0.6, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.7)
        }, '-=1')
        .fromTo(home_bracelets, 0.6, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.7)
        }, '-=1.3')
        .fromTo(home_rulers, 0.6, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.7)
        }, '-=0.7')
        .fromTo(home_collect, 0.5, {
            opacity: 0,
            scale: 4
        }, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, '-=0.4');

}

function characterPage() {
    var character_globe = $('.wrap-characters .globe-icon'),
        character_on_characters = $('.wrap-characters .character-item .character'),
        info_on_characters = $('.wrap-characters .character-item .info');
    var characterTL = new TimelineMax();

    characterTL
        .fromTo(character_globe, 0.6, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.5)
        }, 0.5)
        .staggerFromTo(character_on_characters, 0.9, {
            opacity: 0,
            y: '-=80'
        }, {
            opacity: 1,
            y: 0,
            ease: Elastic.easeOut.config(1, 0.3)
        }, 0.3)
        .staggerFromTo(info_on_characters, 0.6, {
            opacity: 0,
            x: '+=150'
        }, {
            opacity: 1,
            x: 0,
            ease: Back.easeOut.config(1.7)
        }, 0.2, '-=0.8');
}

function productPage() {
    productCarousel();

    var product_img = $('.list-products .img-wrapper img');
    var productTL = new TimelineMax();

    productTL.staggerFromTo(product_img, 0.5, {
        opacity: 0,
        scale: 0.5
    }, {
        opacity: 1,
        scale: 1,
        ease: Back.easeOut.config(1.5)
    }, 0.1, 0.5);
}

function promotionPage() {
    var promotion_globe = $('.wrap-promotion .globe'),
        promotion_collect_text = $('.wrap-promotion .globe .collect-text'),
        promotion_box_1 = $('.wrap-promotion .promotion-1 .box'),
        promotion_gift_1 = $('.wrap-promotion .promotion-1 .gift'),
        promotion_box_2 = $('.wrap-promotion .promotion-2 .box'),
        promotion_gift_2 = $('.wrap-promotion .promotion-2 .gift'),
        promotion_gilbert = $('.wrap-promotion .gilbert');

    var promotionTL = new TimelineMax();

    promotionTL
        .fromTo(promotion_globe, 0.6, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.5)
        }, 0.5)
        .fromTo(promotion_collect_text, 0.5, {
            opacity: 0,
            scale: 4
        }, {
            opacity: 1,
            scale: 1,
            ease: Expo.easeOut
        }, '-=0.1')
        .fromTo(promotion_gilbert, 0.6, {
            opacity: 0,
            x: '+=' + percentToPixel(promotion_gilbert, 30),
            y: '+=' + percentToPixel(promotion_gilbert, 50)
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            ease: Sine.easeOut
        }, '-=0.1')
        .fromTo(promotion_box_1, 0.4, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.5)
        }, '-=0.2')
        .fromTo(promotion_gift_1, 0.6, {
            opacity: 0,
            scale: 1.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.3)
        })
        .fromTo(promotion_box_2, 0.4, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Back.easeOut.config(1.5)
        }, '-=0.3')
        .fromTo(promotion_gift_2, 0.6, {
            opacity: 0,
            scale: 1.5
        }, {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeOut.config(1, 0.3)
        });
}

function percentToPixel(_elem, _perc) {
    return (_elem.parent().outerWidth() / 100) * parseFloat(_perc);
}
