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
            window.open(select_val,'_blank');
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
        $('.main-menu .navbar-collapse .navbar-nav .current-menu-item').addClass('active');
        $('.main-menu .navbar-collapse .navbar-nav .menu-item-has-children').addClass('dropdown');
        $('.main-menu .navbar-collapse .navbar-nav .menu-item-has-children > a').addClass('dropdown-toggle').attr('role', 'button').attr('aria-haspopup', 'true').attr('aria-expanded', 'false');
        $('.main-menu .navbar-collapse .navbar-nav .menu-item-has-children .sub-menu').addClass('dropdown-menu');
        $('.main-menu .navbar-collapse .navbar-nav > li > a').addClass('uppercase');

        $(window).on('load resize', function() {
            if (Modernizr.mq("screen and (max-width:859px)")) {
                $('.main-menu .navbar-collapse .navbar-nav > .menu-item > a').click(function(){
                    if ($(this).parent().hasClass('open')) {
                        $(this).parent().removeClass('open');
                        $(this).attr('aria-expanded', 'false');
                    } else {
                        $('.main-menu .navbar-collapse .navbar-nav .menu-item-has-children').removeClass('open');
                        $(this).parent().addClass('open');
                        $(this).attr('aria-expanded', 'true');
                    }
                });
            }
            if (Modernizr.mq("screen and (min-width:860px)")) {
                $('.main-menu .navbar-collapse .navbar-nav > .menu-item > a').click(function(){
                    return;
                });
            }
        });
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
