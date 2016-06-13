(function($) {

    "use strict";

    $(document).ready(function() {

        myMinimalMenu();

        /* =================================
         ===  Slideshow                 ====
         =================================== */
        if ($('.slideshow').length) {
            $('.slideshow').allinone_bannerRotator({
                autoPlay: 3,
                skin: 'universal',
                width: 2000,
                height: 500,
                responsive: true,
                responsiveRelativeToBrowser: false,
                showCircleTimer: false,
                autoHideNavArrows: false,
                autoHideBottomNav: false,
                showPreviewThumbs: false
            });
        }


    });

})(window.jQuery);