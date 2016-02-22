(function($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: params.assetURL + "/images/logo.png",
        backgroundColor: '#39a9c1',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

})(window.jQuery);