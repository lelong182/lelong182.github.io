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
        logo: "dist/images/favicon.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function() {
        // Slider
        var slider = new MasterSlider();
        slider.setup('mainMasterslider' , {
             width:1000,
             height:500, 
             space:5,
             autoplay: true,
             fullwidth:true
        });
        slider.control('arrows');

        var footerSlider = new MasterSlider();
        footerSlider.setup('footerMasterslider' ,{
            loop:true,
            width:238,
            height:122,
            speed:20,
            view:'fadeBasic',
            preload:0,
            space:0,
            wheel:true,
            autoplay: true
        });
        footerSlider.control('arrows');
        
        //Select2
        $('#externallink').select2({
            placeholder: "[Hãy chọn 1 liên kết]",
        });

        $('#externallink').on('select2:select', function (e) {
            // Do something
            var selected_element = $(e.currentTarget);
            var select_val = selected_element.val();
            console.log('selected...');
            console.log(select_val);
        });

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
        // Sticky
        mySticky('.left-banner', 160);
        mySticky('.right-banner', 160);
        $('.custom-nav').sticky({topSpacing:0});

        // Main menu
        $('.main-menu .navbar-collapse .navbar-nav .menu-item-has-children a:not(".sub-menu li a")').append("<span class='caret'></span>");
    });

})(window.jQuery);

function mySticky(selector, offset) {
    if ($(selector).length) {
        $(window).on('load scroll', function () {
            var scroll_top = $(window).scrollTop();
            if (scroll_top > offset) {
                var top_value = scroll_top - 160;
                $(selector).css({
                    'transform': 'translateY(' + top_value + 'px)'
                });
            } else {
                $(selector).css({
                    'transform': 'translateY(0)'
                });
            }
        });
    }
}
