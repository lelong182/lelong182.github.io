(function($) {

    "use strict";

    $(document).ready(function() {

        var frame_1_img_1 = $('.frame-1 .img-1'),
            frame_1_img_2 = $('.frame-1 .img-2'),
            frame_1_text_1 = $('.frame-1 .text-1'),
            frame_1_text_2 = $('.frame-1 .text-2'),
            frame_1_text_3 = $('.frame-1 .text-3'),
            frame_2_text_1 = $('.frame-2 .text-1'),
            frame_2_text_2 = $('.frame-2 .text-2'),
            frame_2_wrap_logo = $('.frame-2 .wrap-logo'),
            frame_2_logo_1 = $('.frame-2 .logo-1'),
            frame_2_logo_2 = $('.frame-2 .logo-2'),
            frame_2_logo_3 = $('.frame-2 .logo-3'),
            frame_2_logo_4 = $('.frame-2 .logo-4'),
            frame_2_logo_5 = $('.frame-2 .logo-5'),
            frame_3_text_1 = $('.frame-3 .text-1'),
            frame_3_text_2 = $('.frame-3 .text-2'),
            frame_3_link = $('.frame-3 .link'),
            frame_3_right_box = $('.frame-3 .right-box'),
            frame_3_right_box_span = $('.frame-3 .right-box > span'),
            replay = $('.replay');

        var tl = new TimelineMax({
            paused: true
        });
        tl
            .fromTo(frame_1_text_1, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '+=0.3')
            .fromTo(frame_1_text_2, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.3')
            .fromTo(frame_1_text_3, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.3')
            .fromTo(frame_1_img_1, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.3')
            .fromTo(frame_1_img_2, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.8')
            .to(frame_1_text_1, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            })
            .to(frame_1_text_2, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            }, '-=0.6')
            .to(frame_1_text_3, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            }, '-=0.6')
            .to(frame_1_img_1, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            }, '-=0.2')
            .to(frame_1_img_2, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            }, '-=0.6')
            .fromTo(frame_2_text_1, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.2')
            .fromTo(frame_2_text_2, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.4')
            .fromTo(frame_2_wrap_logo, 0.5, {
                x: 40,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            }, '-=0.4')
            .fromTo(frame_2_logo_1, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '+=0.1')
            .to(frame_2_logo_1, 0.6, {
                autoAlpha: 0,
                ease: Power3.easeOut
            }, '+=0.5')
            .fromTo(frame_2_logo_2, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.2')
            .to(frame_2_logo_2, 0.6, {
                autoAlpha: 0,
                ease: Power3.easeOut
            }, '+=0.5')
            .fromTo(frame_2_logo_3, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.2')
            .to(frame_2_logo_3, 0.6, {
                autoAlpha: 0,
                ease: Power3.easeOut
            }, '+=0.5')
            .fromTo(frame_2_logo_4, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.2')
            .to(frame_2_logo_4, 0.6, {
                autoAlpha: 0,
                ease: Power3.easeOut
            }, '+=0.5')
            .fromTo(frame_2_logo_5, 0.8, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.2')
            .to(frame_2_text_1, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            })
            .to(frame_2_text_2, 0.6, {
                autoAlpha: 0,
                y: 20,
                ease: Power4.easeOut
            }, '-=0.6')
            .to(frame_2_wrap_logo, 0.5, {
                x: 40,
                autoAlpha: 0,
                ease: Expo.easeInOut
            }, '-=0.3')
            .to(frame_2_logo_5, 0.5, {
                x: 40,
                autoAlpha: 0,
                ease: Expo.easeInOut
            }, '-=0.5')
            .fromTo(frame_3_text_1, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.2')
            .fromTo(frame_3_text_2, 0.6, {
                y: 20,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.3')
            .fromTo(frame_3_link, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '-=0.2')
            .fromTo(frame_3_right_box, 0.5, {
                x: 40,
                autoAlpha: 0
            }, {
                x: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            }, '-=0.5')
            .fromTo(frame_3_right_box_span, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power3.easeOut
            }, '+=0.1')
            .fromTo(replay, 0.6, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                ease: Power2.easeOut
            }, '-=0.2');

        $(this).on('click', '.replay', function() {
        	tl.restart();
        });

        $(window).on('load', function() {
            tl.play();
        });

    });
})(window.jQuery);