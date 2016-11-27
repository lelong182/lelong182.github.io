(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: "assets/images/logo.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function () {

        console.log(111);

    });

})(window.jQuery);

function percentToPixel(_elem, _perc) {
    return (_elem.parent().outerWidth() / 100) * parseFloat(_perc);
}
