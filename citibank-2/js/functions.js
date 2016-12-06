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
        logo: "images/logo.png",
        backgroundColor: '#00A7E6',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);

        /* =================================
         ===  Animation                 ====
         =================================== */
        $('.first-slide')
            .delay(1500)
            .velocity({
                translateX: 0,
                opacity: 1
            }, {
                duration: 1200
            })
            .delay(1500)
            .velocity({
                opacity: 0
            }, {
                duration: 1000,
                complete: function (elements) {
                    $('.first-slide').remove()
                    $('.slideshow-container').css({
                        opacity: 1
                    });
                }
            });
        $('.bottom-slideshow .wrap-img')
            .delay(2000)
            .velocity({
                translateX: 0,
                opacity: 1
            }, {
                duration: 800
            });
    });

    $(document).ready(function () {
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
        $(".nav-tabs li.disabled a[data-toggle=tab]").on("click", function (e) {
            e.preventDefault();
            return false;
        });


        /* =================================
         ===  Slideshow                 ====
         =================================== */
        if ($('.slideshow').length) {
            $('.slideshow').allinone_bannerRotator({
                defaultEffect: 'fade',
                autoPlay: 5,
                skin: 'universal',
                width: 1366,
                height: 651,
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
        $('.hotel-content .list-contents').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 5000,
            autoplay: false,
            speed: 1000
        });
        $('.hotel-image .list-imgs').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 5000,
            autoplay: false,
            speed: 1000,
            swipeToSlide: true
        });
        $('.hotel-image .list-imgs .images').slick({
            arrows: false,
            infinite: true,
            fade: true,
            autoplaySpeed: 3000,
            autoplay: true,
            speed: 600
        });
        $('.hotel-tabs').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: false,
            speed: 800,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 857,
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
        $(this).on('click', '.slick-nav li a', function () {
            var index = $(this).parent().index();
            var this_wrap = $(this).closest('.wrap-hotel-content');
            var current_slick = this_wrap.find('.list-contents');
            var current_slick2 = this_wrap.find('.list-imgs');
            $(this).parent().addClass('active');
            this_wrap.find('.slick-nav li').removeClass('active');
            current_slick.slick('slickGoTo', index, false);
            current_slick2.slick('slickGoTo', index, false);
        });
        $('.hotel-content .list-contents').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var this_wrap = $(this).closest('.wrap-hotel-content');
            this_wrap.find('.slick-nav li').removeClass('active');
            this_wrap.find('.slick-nav li').eq(nextSlide).addClass('active');
        });
        $('.hotel-image .list-imgs').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var this_wrap = $(this).closest('.wrap-hotel-content');
            this_wrap.find('.slick-nav li').removeClass('active');
            this_wrap.find('.slick-nav li').eq(nextSlide).addClass('active');
        });
        $('.hotel-image .list-imgs .images').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            return false;
        });
        $(this).on('click', '.hotel-tabs .slick-slide a', function () {
            $('.hotel-tabs li').removeClass('active');
            $(this).parent().addClass('active');
        });
        $('.hotel-tabs').on('shown.bs.tab', function (e) {
            $('.hotel-content .list-contents').slick('setPosition');
            $('.hotel-image .list-imgs').slick('setPosition');
            $('.hotel-image .list-imgs .images').slick('setPosition');
        });


        /* =================================
         ===  Apply Bar                 ====
         =================================== */
        $(window).scroll(function () {
            if (!$('.apply').hasClass('closed')) {
                if ($(window).scrollTop() > 700) {
                    $('.apply').fadeIn();
                } else {
                    $('.apply').fadeOut();
                }
            }
        });
        $(this).on('click', '.apply .close-link', function () {
            $('.apply').addClass('closed');
            $('.apply').fadeOut();
            $('.footer').css({
                'margin-bottom': 0
            });
        });
        $('a[id^="link-"]').on('click', function () {
            $('div[id^="Modal-"]').modal('hide');
        });

    });
})(window.jQuery);