(function ($) {

    "use strict";

    $.fn.adtop_animation = function (effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    window.loading_screen = window.pleaseWait({
        logo: inapps_params.logo_url,
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
         ===  Sliders                 ====
         =================================== */
        $('#home-sliders').masterslider({
            width: 1368,
            height: 767,
            view: 'fade',
            space: 1,
            layout: 'fullscreen',
            loop: true,
            mouse: false,
            preload: 0,
            autoplay: true,
            controls: {
                arrows: {autohide: false}
            }
        });


        /* =================================
         ===  Sliders                 ====
         =================================== */
        mySticky('header.header', 75);


        /* =================================
         ===  Fancybox                 ====
         =================================== */
        $("a.various.iframe").fancybox({
            'width': '75%',
            'height': '75%',
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'type': 'iframe'
        });


        /* =================================
         ===  Meet The Team                 ====
         =================================== */
        $('.meet-the-team .list-members').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            responsive: [
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
         ===  Testimonial                 ====
         =================================== */
        $('.testimonial .list-testi').slick({
            arrows: true,
            infinite: true,
            fade: true,
            autoplay: true,
            speed: 1000
        });


        /* =================================
         ===  Clients                 ====
         =================================== */
        $('.clients .list-clients').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 7,
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


        /* =================================
         ===  Case Study                 ====
         =================================== */
        $('.wrap-case-study .details-slider').slick({
            arrows: true,
            infinite: true,
            autoplay: true,
            speed: 1200
        });


        /* =================================
         ===  Animation                 ====
         =================================== */
        var wwa_img = $('.home .who-we-are .wwa-img'),
            wwa_text_h3 = $('.home .who-we-are .wwa-text h3'),
            wwa_text_div = $('.home .who-we-are .wwa-text div'),
            wwa_text_ul = $('.home .who-we-are .wwa-text ul'),
            sv_text_h3 = $('.home .services h3'),
            sv_text_h5 = $('.home .services h5'),
            sv_img = $('.home .services .services-img'),
            sv_left_media = $('.home .services .services-left-text .media'),
            sv_right_media = $('.home .services .services-right-text .media'),
            op_text_h3 = $('.home .our-process h3'),
            op_text_h5 = $('.home .our-process h5'),
            op_item = $('.home .our-process .op-item'),
            cs_text_h3 = $('.home .case-study h3'),
            cs_text_h5 = $('.home .case-study h5'),
            cs_stats = $('.home .case-study .stats'),
            cs_list = $('.home .case-study .list-cs'),
            mtt_text_h3 = $('.home .meet-the-team h3'),
            mtt_text_h5 = $('.home .meet-the-team h5'),
            testi_list = $('.home .testimonial .list-testi'),
            cu_info = $('.home .contact-us .contact-info'),
            cu_form = $('.home .contact-us .contact-form'),
            footer = $('.home .footer');
        var counter1 = {var: 0},
            counter2 = {var: 0},
            counter3 = {var: 0},
            counter4 = {var: 0};
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onCenter"
            }
        });
        var wwaTL = new TimelineMax(),
            svTL = new TimelineMax(),
            opTL = new TimelineMax(),
            csTL = new TimelineMax(),
            mttTL = new TimelineMax(),
            testiTL = new TimelineMax(),
            cuTL = new TimelineMax();
        wwaTL
            .fromTo(wwa_img, 0.8, {
                scale: 0.8,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                ease: Power4.easeOut
            })
            .fromTo(wwa_text_h3, 0.5, {
                x: '-=200',
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Sine.easeOut
            }, '-=0.3')
            .fromTo(wwa_text_div, 0.5, {
                x: '-=200',
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Sine.easeOut
            }, '-=0.2')
            .fromTo(wwa_text_ul, 0.5, {
                x: '-=200',
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Sine.easeOut
            }, '-=0.2');
        svTL
            .fromTo(sv_text_h3, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            })
            .fromTo(sv_text_h5, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            }, '-=0.3')
            .fromTo(sv_img, 1.4, {
                scale: 0.8,
                autoAlpha: 0,
                y: '-=150'
            }, {
                scale: 1,
                autoAlpha: 1,
                y: 0,
                ease: Power4.easeOut
            }, '-=0.1')
            .staggerFromTo(sv_left_media, 0.6, {
                autoAlpha: 0,
                x: '-=150',
            }, {
                autoAlpha: 1,
                x: 0,
                ease: Sine.easeOut
            }, 0.2, '-=1')
            .staggerFromTo(sv_right_media, 0.6, {
                autoAlpha: 0,
                x: '+=150',
            }, {
                autoAlpha: 1,
                x: 0,
                ease: Sine.easeOut
            }, 0.2, '-=0.3');
        opTL
            .fromTo(op_text_h3, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            })
            .fromTo(op_text_h5, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            }, '-=0.3')
            .staggerFromTo(op_item, 0.6, {
                autoAlpha: 0,
                y: '+=150',
            }, {
                autoAlpha: 1,
                y: 0,
                ease: Sine.easeOut
            }, 0.2, '-=0.3');
        csTL
            .fromTo(cs_text_h3, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            })
            .fromTo(cs_text_h5, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            }, '-=0.3')
            .fromTo(cs_stats, 0.8, {
                scale: 1.2,
                autoAlpha: 0
            }, {
                scale: 1,
                autoAlpha: 1,
                ease: Power4.easeOut
            }, '-=0.3')
            .to(counter1, 2, {
                var: $('.case-study .stats-item.item-1 strong').data('value'),
                onUpdate: function () {
                    $('.case-study .stats-item.item-1 strong b').html(Math.ceil(counter1.var));
                },
                ease: Circ.easeOut
            }, '-=0.5')
            .to(counter2, 2, {
                var: $('.case-study .stats-item.item-2 strong').data('value'),
                onUpdate: function () {
                    $('.case-study .stats-item.item-2 strong b').html(Math.ceil(counter2.var));
                },
                ease: Circ.easeOut
            }, '-=2')
            .to(counter3, 2, {
                var: $('.case-study .stats-item.item-3 strong').data('value'),
                onUpdate: function () {
                    $('.case-study .stats-item.item-3 strong b').html(Math.ceil(counter3.var));
                },
                ease: Circ.easeOut
            }, '-=2')
            .to(counter4, 2, {
                var: $('.case-study .stats-item.item-4 strong').data('value'),
                onUpdate: function () {
                    $('.case-study .stats-item.item-4 strong b').html(Math.ceil(counter4.var));
                },
                ease: Circ.easeOut
            }, '-=2')
            .fromTo(cs_list, 0.8, {
                y: '+=200',
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Sine.easeOut
            }, '-=2');
        mttTL
            .fromTo(mtt_text_h3, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            })
            .fromTo(mtt_text_h5, 0.6, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            }, '-=0.3');
        testiTL
            .fromTo(testi_list, 0.8, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(1.5)
            });
        cuTL
            .fromTo(cu_info, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Sine.easeOut
            })
            .fromTo(cu_form, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Sine.easeOut
            }, '-=0.3')
            .fromTo(footer, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Back.easeOut.config(1.5)
            }, '-=0.3');
        new ScrollMagic.Scene({
            triggerElement: $('.home .who-we-are')[0]
        })
            .setTween(wwaTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .services')[0]
        })
            .setTween(svTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .our-process')[0]
        })
            .setTween(opTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .case-study')[0]
        })
            .setTween(csTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .meet-the-team')[0]
        })
            .setTween(mttTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .testimonial')[0]
        })
            .setTween(testiTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.home .contact-us')[0]
        })
            .setTween(cuTL)
            .addTo(ctrl);

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
                $(selector).adtop_animation('slideInDown');
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
                $(selector).adtop_animation('slideInDown');
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