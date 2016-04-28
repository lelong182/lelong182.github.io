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
        // if ($('.welcome-modal').length) {
        //     setTimeout(function() {
        //         $(".welcome-modal").modal('show');
        //     }, 1500);
        // }
    });

    $(document).ready(function() {

        /* =================================
        ===  Minimal Menu                 ====
        =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
        $('.minimal-menu').find('div.menu-wrapper').before('<input class=\"show-submenu\" type=\"checkbox\" />');


        /* =================================
        ===  Tooltip                 ====
        =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* =================================
         ===  Only Number                 ====
         =================================== */
        if ($('.onlynumber').length) {
            $('.onlynumber').onlynumber();
        }


        /* ================================
         ===  Custom Select                 ====
         =================================== */
        if ($('.custom-select').length) {
            $('.custom-select').fancySelect();
        }


        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        $(".wrap-general-declaration").mCustomScrollbar();


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        if($('.wrapper').length) {
            $("header.header").sticky({
                topSpacing: 0
            });
        }


        /* =================================
         ===  Preferred Item                 ====
         =================================== */
        $(this).on('mouseover', '.preferred-item', function() {
            $(this).find('.info-item').addClass('open');
        });
        $(this).on('mouseout', '.preferred-item', function() {
            $('.preferred-item .info-item').removeClass('open');
        });
        $(this).on('click', '.info-item .choose-link', function() {
            $(this).closest('.preferred-item').addClass('active');
            $(this).removeClass().addClass('remove-link').text('Remove card');
        });
        $(this).on('click', '.info-item .remove-link', function() {
            $(this).closest('.preferred-item').removeClass('active');
            $(this).removeClass().addClass('choose-link').text('Choose card');
        });


        /* =================================
         ===  Popup                 ====
         =================================== */
        $(this).on('click', '.welcome-modal .submit-btn', function() {
            $(".welcome-modal").modal('hide');
            $(".error-modal").modal('show');
            return false;
        });
        


    });
})(window.jQuery);