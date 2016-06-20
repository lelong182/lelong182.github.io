(function($) {

    "use strict";

    $(window).on('load', function() {
        if ($('#map').length) {
            loadScript();
            setTimeout(function() {
                google.maps.event.addDomListener(window, 'load', initialize("185BIS Võ Thị Sáu, Phường 7, Quận 3", 10.803548, 106.721391));
            }, 1000);
        }
    });

    $(document).ready(function() {

        myMinimalMenu();
        myFancybox('.fancybox');

        /* =================================
         ===  Slideshow                 ====
         =================================== */
        if ($('.slideshow').length) {
            $('.slideshow').allinone_bannerRotator({
                autoPlay: 3,
                skin: 'universal',
                width: 2000,
                height: 620,
                responsive: true,
                responsiveRelativeToBrowser: false,
                showCircleTimer: false,
                showPreviewThumbs: false,
                showAllControllers: false,
                showBottomNav: false
            });
        }


        /* =================================
         ===  Megafolio                 ====
         =================================== */
        $('.list-projects .style-1').megafoliopro({
            filterChangeScale: 1,
            delay: 20,
            paddingHorizontal: 0,
            paddingVertical: 0,
            layoutarray: [14]
        });
        $('.list-projects .style-2').megafoliopro({
            filterChangeScale: 1,
            delay: 20,
            paddingHorizontal: 0,
            paddingVertical: 0,
            layoutarray: [14]
        });


        /* =================================
         ===  Collapse                 ====
         =================================== */
        $(this).on('click', '.list-careers h4[data-toggle="collapse"]', function() {
            if ($(this).attr('aria-expanded') == 'true') {
                var this_parent = $(this).parent();
                setTimeout(function() {
                    $('html, body').stop().animate({
                        'scrollTop': this_parent.offset().top
                    }, 900, 'swing');
                }, 400);
            }
        });


        /* =================================
         ===  Custom Carousel                 ====
         =================================== */
        if ($('.list-thumbs').length) {
            $('.list-thumbs').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
            $('.design-modal').on('shown.bs.modal', function(e) {
                $('.list-thumbs').slick('setPosition');
            });
            $(this).on('click', '.list-thumbs img', function() {
                $(this).closest('.design-modal-content').find('.wrap-img img').attr('src', $(this).attr('src'));
            });
        }


        /* =================================
         ===  More About                 ====
         =================================== */
        $(this).on('click', '.wrap-about .more-about-link', function() {
            $('html, body').stop().animate({
                'scrollTop': $('.wrap-about .about-block').offset().top
            }, 900, 'swing');
        });


    });

})(window.jQuery);