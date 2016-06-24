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
                defaultEffect: 'fade',
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
            autoplay: true,
            speed: 800
        });
        $('.hotel-content .list-contents').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 5000,
            autoplay: true,
            speed: 1000
        });
        $('.hotel-image .list-imgs').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 4000,
            autoplay: true,
            speed: 800
        });
        $(this).on('click', '.slick-nav li a', function() {
            var index = $(this).parent().index();
            var current_slick = $(this).closest('.wrap-hotel-content').find('.list-contents');
            $(this).parent().addClass('active');
            $(this).closest('.wrap-hotel-content').find('.slick-nav li').removeClass('active');
            current_slick.slick('slickGoTo', index, false);
        });
        $('.hotel-content .list-contents').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $(this).closest('.wrap-hotel-content').find('.slick-nav li').removeClass('active');
            $(this).closest('.wrap-hotel-content').find('.slick-nav li').eq(nextSlide).addClass('active');
        });
        $('.hotel-tabs').on('shown.bs.tab', function(e) {
            $('.hotel-content .list-contents').slick('setPosition');
            $('.hotel-image .list-imgs').slick('setPosition');
        });


        /* =================================
         ===  Apply Bar                 ====
         =================================== */
        $(window).scroll(function() {
            if ($(window).scrollTop() > 700) {
                $('.apply').fadeIn();
            } else {
                $('.apply').fadeOut();
            }
        });


    });
})(window.jQuery);