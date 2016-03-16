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
        $('#masterslider').masterslider({
            width:1024,
            height:768,
            space:5,
            view:'basic',
            layout:'fullscreen',
            speed:20,
            controls : {
                bullets : {
                    autohide: false
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
            responsiveWidth: 1400
        });


    });
})(window.jQuery);