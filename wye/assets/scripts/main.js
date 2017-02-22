(function ($) {

    "use strict";

    $.fn.customAnimate = function (effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    window.loading_screen = window.pleaseWait({
        logo: "dist/images/logo.png",
        backgroundColor: '#334d5c',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function () {

        /* =================================
         ===  Minimal Menu                 ====
         =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('menu-item-has-children');
        $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu menu-item-has-children');
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$(event.target).hasClass('minimal-menu-button')) {
                $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
            }
        });
        if (Modernizr.mq('(max-width: 857px)')) {
            $(this).on('click', '.menu > .menu-item-has-children > a', function () {
                if ($(this).hasClass('opened')) {
                    $(this).removeClass('opened');
                } else {
                    $('.menu > .menu-item-has-children > a').removeClass('opened');
                    $(this).addClass('opened');
                }
            });
        }

    });

})(window.jQuery);