if (adblock) {
    document.documentElement.innerHTML = '<html><head><title>Hãy tắt AdBlock!</title></head><body><h1 style="text-align: center;margin: 2em auto;">Hãy tắt AdBlock để trải nghiệm BigBom.</h1></body></html>';
}

(function($) {

    "use strict";

    $(document).ready(function() {

        /* =================================
         ===  Tab Link                 ====
         =================================== */
        $(this).on('click', '.signup-link', function() {
            $('.wrap-content .nav-tabs a[href="#signup"]').trigger('click');
            return false;
        });


        /* =================================
         ===  Toggle View Password                 ====
         =================================== */
        $(this).on('click', 'input[type="password"]', function() {
            if ($(this).is(":focus") && $(this).parent('.wrap-password').length == 0) {
                $(this).wrap('<div class="wrap-password"></div>');
                $(this).after('<span class="show-password"></span>');
                $(this).focus();
            }
        });
        $(this).on('mouseup', 'body', function(event) {
            if (!$('.wrap-password').is(event.target) && $('.wrap-password').has(event.target).length === 0) {
                $('.wrap-password').each(function(index) {
                    var span = $(this).find('.show-password');
                    span.unwrap();
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

    });

})(window.jQuery);