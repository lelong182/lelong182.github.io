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