(function($) {

    "use strict";

    $(document).ready(function() {  

        $(this).on('click', '.signup-link', function() {
            $('.wrap-content .nav-tabs a[href="#signup"]').trigger('click');
            return false;
        });

    });

})(window.jQuery);