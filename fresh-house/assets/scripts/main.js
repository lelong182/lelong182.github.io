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
        $('.megafolio-container').megafoliopro({
            filterChangeScale: 1,
            delay: 20,
            paddingHorizontal: 0,
            paddingVertical: 0,
            layoutarray: [14]
        });


    });

})(window.jQuery);