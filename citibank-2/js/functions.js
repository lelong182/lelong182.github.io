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
        logo: "images/logo.png",
        backgroundColor: '#00A7E6',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function() {

        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
        ===  Disable Tab                 ====
        =================================== */
        $(".nav-tabs li.disabled a[data-toggle=tab]").on("click", function(e) {
            e.preventDefault();
            return false;
        });


        /* =================================
         ===  Slideshow                 ====
         =================================== */
        if ($('.slideshow').length) {
            $('.slideshow').allinone_bannerRotator({
                autoPlay: 3,
                skin: 'universal',
                width: 1370,
                height: 650,
                responsive: true,
                responsiveRelativeToBrowser: false,
                showCircleTimer: false,
                showPreviewThumbs: false,
                showAllControllers: false,
                showBottomNav: false
            });
        }


        /* =================================
         ===  Custom Carousel                 ====
         =================================== */
        $('.bottom-slideshow .list-imgs').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 4000,
            autoplay: true
        });


    });
})(window.jQuery);