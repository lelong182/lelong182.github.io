(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: "assets/images/logo.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
        if ($('.subscribe-modal').length) {
            setTimeout(function() {
                $('.subscribe-modal').modal('show');
            }, 1000);
        }
    });

    $(document).ready(function () {

        /* =================================
         ===  Onlynumber                 ====
         =================================== */
        $('.onlynumber').onlynumber();


        /* =================================
         ===  Sliders                 ====
         =================================== */
        $('#home-sliders').masterslider({
            width: 1100,
            height: 400,
            view: 'fade',
            space: 1,
            layout: 'fullwidth',
            loop: true,
            mouse: false,
            preload: 0,
            autoplay: true,
            controls: {
                bullets: {autohide: false},
                arrows: {autohide: false}
            }
        });
        $('#testimonial-sliders').masterslider({
            width: 1100,
            height: 10,
            view: 'fade',
            space: 1,
            layout: 'fillwidth',
            autoHeight:true,
            loop: true,
            mouse: false,
            preload: 0,
            autoplay: false,
            controls: {
                bullets: {autohide: false},
                arrows: {autohide: false}
            }
        });


        /* =================================
         ===  Custom Select                 ====
         =================================== */
        $('.custom-select').select2();
        $('.custom-select.no-search').select2({
            minimumResultsForSearch: -1
        });


        /* =================================
         ===  Category Menu                 ====
         =================================== */
        $(this).on({
            mouseenter: function () {
                var self = $(this)
                $('body').prepend('<div class="black-overlay"></div>');
                setTimeout(function() {
                    $('.black-overlay').addClass('open');
                    self.find('.cat-menu').addClass('open');
                }, 0);
            },
            mouseleave: function () {
                $('.black-overlay').removeClass('open');
                $(this).find('.cat-menu').removeClass('open');
                setTimeout(function() {
                    $('.black-overlay').remove();
                }, 100);
            }
        }, '.wrap-cat-menu');
        $(this).on({
            mouseenter: function () {
                $(this).children('ul').addClass('open');
            },
            mouseleave: function () {
                $(this).children('ul').removeClass('open');
            }
        }, '.cat-menu-details li.has-child');


        /* =================================
         ===  Top Links                 ====
         =================================== */
        $(this).on({
            mouseenter: function () {
                $(this).find('.child-box').addClass('open');
            },
            mouseleave: function () {
                $(this).find('.child-box').removeClass('open');
            }
        }, '.top-links > li');
        $('.register-modal').on('show.bs.modal', function () {
            $('.login-modal').modal('hide');
        });
        $('.login-modal').on('show.bs.modal', function () {
            $('.register-modal').modal('hide');
        });


        /* =================================
         ===  Toggle View Password                 ====
         =================================== */
        $(this).on('click', 'input[type="password"]', function() {
            if ($(this).is(":focus") && $(this).parent('.wrap-password').length == 0) {
                $(this).parent().addClass('wrap-password');
                $(this).after('<span class="show-password"></span>');
                $(this).focus();
            }
        });
        $(this).on('mouseup', 'body', function(event) {
            if (!$('.wrap-password').is(event.target) && $('.wrap-password').has(event.target).length === 0) {
                $('.wrap-password').each(function(index) {
                    var span = $(this).find('.show-password');
                    span.parent().removeClass('wrap-password');
                    span.remove();
                });
            }
        });
        $(this).on('click', '.wrap-password .show-password', function() {
            $(this).prev().attr('type', 'text');
            $(this).removeClass('show-password').addClass('hide-password');
        });
        $(this).on('click', '.wrap-password .hide-password', function() {
            $(this).prev().attr('type', 'password');
            $(this).removeClass('hide-password').addClass('show-password');
        });


        /* =================================
         ===  Cart Box                 ====
         =================================== */
        $(this).on({
            mouseenter: function () {
                var self = $(this)
                $('body').prepend('<div class="black-overlay"></div>');
                setTimeout(function() {
                    $('.black-overlay').addClass('open');
                    self.find('.cart-box').addClass('open');
                }, 0);
            },
            mouseleave: function () {
                $('.black-overlay').removeClass('open');
                $(this).find('.cart-box').removeClass('open');
                setTimeout(function() {
                    $('.black-overlay').remove();
                }, 100);
            }
        }, '.cart-menu');


        /* =================================
         ===  Topbar                 ====
         =================================== */
        $(this).on('click', '.topbar .close-icon', function() {
            $('.topbar').addClass('closed');
            $('header.header').addClass('no-topbar');
        });


        /* =================================
         ===  Product Item                 ====
         =================================== */
        $(this).on({
            mouseenter: function () {
                $(this).find('.content').addClass('open');
                $(this).find('.bottom-info').addClass('open');
            },
            mouseleave: function () {
                $(this).find('.content').removeClass('open');
                $(this).find('.bottom-info').removeClass('open');
            }
        }, '.product-item');


        /* =================================
         ===  Checkout Quantity                 ====
         =================================== */
        $(this).on('click', '.wrap-quantity .plus-icon', function() {
            var this_quantity_input = $(this).closest('.wrap-quantity').find('input');
            var this_quantity_value = parseInt(this_quantity_input.val());
            this_quantity_input.val(this_quantity_value + 1);
        });
        $(this).on('click', '.wrap-quantity .minus-icon', function() {
            var this_quantity_input = $(this).closest('.wrap-quantity').find('input');
            var this_quantity_value = parseInt(this_quantity_input.val());
            if(this_quantity_value > 1) {
                this_quantity_input.val(this_quantity_value - 1);
            }
        });

    });

})(window.jQuery);