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
        backgroundColor: '#000000',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function() {

        $("img.lazy").unveil();

        /* =================================
        ===  Minimal Menu                 ====
        =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
        $('.minimal-menu').find('div.menu-wrapper').before('<input class=\"show-submenu\" type=\"checkbox\" />');


        /* =================================
        ===  Fancy Box                 ====
        =================================== */
        if ($('.fancybox').length) {
            $(".fancybox").fancybox({
                padding: 0,
                helpers : {
                    overlay : {
                        css : {
                            'background' : 'rgba(0, 0, 0, 0.85)'
                        }
                    }
                }
            }
            );
        }


        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
        ===  Slideshow                 ====
        =================================== */
        $('#home-slideshow').masterslider({
            autoplay:true,
            width:1920,
            height:1080,
            space:5,
            overPause:false,
            view:'basic',
            layout:'fullscreen',
            loop:true,
            speed:15,
            view:"fade",
            controls : {
                bullets : {
                    autohide: false
                }
            }
        });
        $('#portfolio-slideshow').masterslider({
            autoplay:true,
            width:1920,
            height:1080,
            space:5,
            overPause:false,
            view:'basic',
            layout:'fullscreen',
            loop:true,
            speed:15,
            view:"fade",
            controls : {
                bullets : {
                    autohide: true
                },
                arrows : {
                    autohide: true
                }
            }
        });
        $('#portfolio-details-slideshow').masterslider({
            autoplay:true,
            width:1920,
            height:1080,
            space:5,
            overPause:false,
            view:'basic',
            layout:'fullscreen',
            fullscreenMargin:49,
            loop:true,
            speed:15,
            view:"fade",
            controls : {
                bullets : {
                    autohide: true
                },
                arrows : {
                    autohide: true
                }
            }
        });


        /* =================================
         ===  Carousel                 ====
         =================================== */
        if($('#carousel-1').length) {
            $('#carousel-1').carousel({
                interval: 3000
            });
        }


        /* =================================
        ===  FullPage                 ====
        =================================== */
        $('#fullpage').fullpage({
            verticalCentered: false,
            css3: false,
            scrollingSpeed: 1000,
            fitToSection: false,
            responsiveWidth: 858
        });


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        if($('.wrapper').length) {
            $("header.header").sticky({
                topSpacing: 0
            });
        }


        /* =================================
         ===  Megafolio                 ====
         =================================== */
        $('.megafolio-container').megafoliopro({
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:800,
            filterChangeRotate:99,
            filterChangeScale:0.6,
            delay:20,
            paddingHorizontal:20,
            paddingVertical:20,
            layoutarray:[0]
        });


        /* =================================
        ===  ScrollMagic with GSAP                 ====
        =================================== */
        var wh = window.innerHeight,
            $header = $('header.header'),
            $aboutus_title = $('.about-us .big-caption'),
            $aboutus_p = $('.about-us p'),
            $featuredprojects_title = $('.featured-projects .big-caption'),
            $featuredprojects_p = $('.featured-projects p'),
            $featuredprojects_projectitem = $('.featured-projects .project-item'),
            $contactus_title = $('.contact-us .big-caption'),
            $contactus_contactinfo = $('.contact-us .contact-info'),
            $contactus_messageinfo = $('.contact-us .message-info'),
            $contactus_messageform = $('.contact-us .message-form'),
            $contactus_wrapmap = $('.contact-us .wrap-map'),
            $bottominfo_title = $('.bottom-info h3'),
            $bottominfo_p = $('.bottom-info p'),
            $bottominfo_carousel = $('.bottom-info .carousel'),
            $bottominfo_footer = $('.bottom-info .footer'),
            $portfolio_footer = $('.list-portfolio .footer');

        var ctrl = new ScrollMagic.Controller();

        var headerTL = new TimelineMax(),
            aboutusTL = new TimelineMax(),
            featuredprojectsTL = new TimelineMax(),
            contactusTL = new TimelineMax(),
            bottominfoTL = new TimelineMax(),
            portfolioTL = new TimelineMax();
        
        headerTL
            .fromTo($header, 0.7, {
                top: -200
            }, {
                top: 0,
                ease: Power2.easeOut
            }, 0.5);
        aboutusTL
            .fromTo($aboutus_title, 0.7, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(2)
            })
            .staggerFromTo($aboutus_p, 0.5, {
                opacity: 0,
                left: 300,
                position: "relative"
            }, {
                opacity: 1,
                left: 0,
                ease: Sine.easeOut
            }, 0.2, '-=0.3');
        featuredprojectsTL
            .fromTo($featuredprojects_title, 0.7, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(2)
            })
            .staggerFromTo($featuredprojects_p, 0.5, {
                opacity: 0,
                left: 300,
                position: "relative"
            }, {
                opacity: 1,
                left: 0,
                ease: Sine.easeOut
            }, 0.2, '-=0.3')
            .staggerFromTo($featuredprojects_projectitem, 0.8, {
                rotationY: -90,
                transformPerspective: 400
            }, {
                rotationY: 0,
                ease: Back.easeOut.config(2)
            }, 0.2, '-=0.5');
        contactusTL
            .staggerFromTo($contactus_title, 0.4, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(2)
            }, 1.2)
            .staggerFromTo($contactus_contactinfo, 1.2, {
                opacity: 0,
                position: "relative"
            }, {
                opacity: 1,
                ease: Back.easeOut.config(1)
            }, 0.4, '-=1')
            .fromTo($contactus_messageinfo, 0.6, {
                left: 300,
                opacity: 0,
                position: "relative"
            }, {
                left: 0,
                opacity: 1,
                ease: Power2.easeOut
            }, '-=1')
            .fromTo($contactus_messageform, 1.2, {
                opacity: 0,
                position: "relative"
            }, {
                opacity: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.6')
            .fromTo($contactus_wrapmap, 1, {
                scale: 0
            }, {
                scale: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.8');
        bottominfoTL
            .fromTo($bottominfo_title, 0.7, {
                rotationX: -90,
                transformPerspective: 400
            }, {
                rotationX: 0,
                ease: Back.easeOut.config(2)
            })
            .staggerFromTo($bottominfo_p, 0.5, {
                opacity: 0,
                left: 300,
                position: "relative"
            }, {
                opacity: 1,
                left: 0,
                ease: Sine.easeOut
            }, 0.2, '-=0.3')
            .fromTo($bottominfo_carousel, 0.7, {
                opacity: 0,
                bottom: -300,
                position: "relative"
            }, {
                opacity: 1,
                bottom: 0,
                ease: Power2.easeOut
            }, '-=0.3')
            .fromTo($bottominfo_footer, 0.7, {
                opacity: 0,
                bottom: -300,
            }, {
                opacity: 1,
                bottom: 0,
                ease: Power2.easeOut
            }, '-=0.3');
        
        new ScrollMagic.Scene({
            triggerElement: $('.hero')[0]
        })  
            .setTween(headerTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.about-us')[0]
        })      
            .on("enter", function() {
                if($('.about-us').length) {
                    $('header.header').addClass('sticky');
                    $('header.header').adtop_animation('fadeInDownBig');
                }
            })
            .on("leave", function() {
                if($('.about-us').length) {
                    $('header.header').removeClass('sticky');
                    $('header.header').adtop_animation('fadeInDownBig');
                }
            })
            .setTween(aboutusTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.featured-projects')[0]
        })
            .setTween(featuredprojectsTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.contact-us')[0]
        })
            .setTween(contactusTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
            triggerElement: $('.bottom-info')[0]
        })
            .setTween(bottominfoTL)
            .addTo(ctrl);
        new ScrollMagic.Scene({
                triggerElement: $('.list-portfolio')[0]
            })      
            .on("update", function() {
                if($('.portfolio').length) {
                    if($(window).scrollTop() > $('.portfolio-slideshow').height() - 80) {
                        $('header.header').addClass('sticky');
                        if(!$('header.header').hasClass('active')) {
                            $('header.header').addClass('active');
                            $('header.header').adtop_animation('fadeInDownBig');
                        } 
                    } else {
                        $('header.header').removeClass('sticky active');
                        if($(window).scrollTop() == 0) {
                            $('header.header').adtop_animation('fadeInDownBig');
                        }
                    }
                }
                
            })
            .addTo(ctrl);


    });
})(window.jQuery);