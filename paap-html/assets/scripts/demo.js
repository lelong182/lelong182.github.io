(function ($) {

    "use strict";

    // window.loading_screen = window.pleaseWait({
    //     logo: "dist/images/logo.png",
    //     backgroundColor: '#fff',
    //     loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    // });
    //
    // $(window).on('load', function () {
    //     window.loading_screen.finish();
    //     $('body').css('opacity', 1);
    // });

    $(document).ready(function () {

        console.log(666);

        /* =================================
         ===  Custom Select                 ====
         =================================== */
        customSelect();

        /* =================================
         ===  Clients                 ====
         =================================== */
        homeClients();


        /* =================================
         ===  Hide List Location                 ====
         =================================== */
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.list-location').is(event.target) && $('.list-location').has(event.target).length === 0 && !$('.wrap-search-location .custom-input').is(event.target)) {
                $('.list-location').removeClass('open');
                $('.location-item').remove();
            }
        });

    });

})(window.jQuery);