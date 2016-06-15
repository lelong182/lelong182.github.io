(function($) {

    "use strict";

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
            layoutarray: [11]
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


    });

})(window.jQuery);