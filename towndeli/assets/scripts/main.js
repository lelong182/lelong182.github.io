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
        logo: "dist/images/logo.png",
        backgroundColor: '#fff',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
        // if ($('.subscribe-modal').length) {
        //     setTimeout(function() {
        //         $('.subscribe-modal').modal('show');
        //     }, 1000);
        // }
    });

    $(window).on('load resize', function () {
        var cart_box_right = $('.cart-menu a').offset().left + $('.cart-box').width();
        var window_width = $(window).width();
        if (window_width - cart_box_right < 0) {
            $('.cart-box').css('right', 0);
        } else {
            $('.cart-box').removeAttr('style');
        }
    });

    $(document).ready(function () {

        /* =================================
         ===  Tooltip                 ====
         =================================== */
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });


        /* =================================
         ===  Onlynumber                 ====
         =================================== */
        $('.onlynumber').onlynumber();


        /* =================================
         ===  Sliders                 ====
         =================================== */
        $(window).on('load', function () {
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
                autoHeight: true,
                loop: true,
                mouse: false,
                preload: 0,
                autoplay: true,
                controls: {
                    bullets: {autohide: false},
                    arrows: {autohide: false}
                }
            });
        });


        /* =================================
         ===  Custom Select                 ====
         =================================== */
        $('.custom-select').select2();
        $('.home-custom-select').select2({
            containerCssClass: 'home-select2',
            dropdownCssClass: 'home-select2'
        });
        $('.custom-select.no-search').select2({
            minimumResultsForSearch: -1
        });


        /* =================================
         ===  Category Menu                 ====
         =================================== */
        $(this).on('click', '.wrap-cat-menu .menu-icon', function () {
            if ($('.wrap-cat-menu').hasClass('opened')) {
                $('.wrap-cat-menu').removeClass('opened');
                $('.wrap-cat-menu .cat-menu').removeClass('open');
            } else {
                $('.wrap-cat-menu').addClass('opened');
                $('.wrap-cat-menu .cat-menu').addClass('open');
            }
        });
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.wrap-cat-menu .cat-menu').is(event.target) && $('.wrap-cat-menu .cat-menu').has(event.target).length === 0 && !$('.wrap-cat-menu .menu-icon').is(event.target)) {
                $('.wrap-cat-menu').removeClass('opened');
                $('.wrap-cat-menu .cat-menu').removeClass('open');
            }
        });
        $(window).on('load resize', function () {
            if (Modernizr.mq('(min-width: 858px)')) {
                $(document).off('click', '.cat-menu-details li.has-child').on({
                    mouseenter: function () {
                        $(this).children('ul').addClass('open');
                    },
                    mouseleave: function () {
                        $(this).children('ul').removeClass('open');
                    }
                }, '.cat-menu-details li.has-child');
            } else {
                $(document).off('mouseenter mouseleave', '.cat-menu-details li.has-child').on('click', '.cat-menu-details li.has-child', function () {
                    var this_ul = $(this).children('ul');
                    if (this_ul.hasClass('open')) {
                        this_ul.removeClass('open');
                    } else {
                        $('.cat-menu-details li.has-child ul').removeClass('open');
                        this_ul.addClass('open');
                    }
                });
            }
        });


        /* =================================
         ===  Top Links                 ====
         =================================== */
        $(this).on({
            mouseenter: function () {
                $(this).find('.child-box').addClass('open');
            },
            mouseleave: function () {
                $(this).find('.child-box').removeClass('open');
            }
        }, '.top-links > li');
        $('.register-modal').on('show.bs.modal', function () {
            $('.login-modal').modal('hide');
        });
        $('.login-modal').on('show.bs.modal', function () {
            $('.register-modal').modal('hide');
        });


        /* =================================
         ===  Toggle View Password                 ====
         =================================== */
        $(this).on('click', 'input[type="password"]', function () {
            if ($(this).is(":focus") && $(this).parent('.wrap-password').length == 0) {
                $(this).parent().addClass('wrap-password');
                $(this).after('<span class="show-password"></span>');
                $(this).focus();
            }
        });
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.wrap-password').is(event.target) && $('.wrap-password').has(event.target).length === 0) {
                $('.wrap-password').each(function (index) {
                    var span = $(this).find('.show-password');
                    span.parent().removeClass('wrap-password');
                    span.remove();
                });
            }
        });
        $(this).on('click', '.wrap-password .show-password', function () {
            $(this).prev().attr('type', 'text');
            $(this).removeClass('show-password').addClass('hide-password');
        });
        $(this).on('click', '.wrap-password .hide-password', function () {
            $(this).prev().attr('type', 'password');
            $(this).removeClass('hide-password').addClass('show-password');
        });


        /* =================================
         ===  Cart Box                 ====
         =================================== */
        $(this).on('click', '.cart-menu a', function () {
            if ($('.cart-menu').hasClass('opened')) {
                $('.cart-menu').removeClass('opened');
                $('.cart-menu .cart-box').removeClass('open');
                $('.black-overlay').remove();
            } else {
                $('.cart-menu').addClass('opened');
                if ($('.black-overlay').length) {
                    $('.cart-menu .cart-box').addClass('open');
                } else {
                    $('body').prepend('<div class="black-overlay"></div>');
                    setTimeout(function () {
                        $('.black-overlay').addClass('open');
                        $('.cart-menu .cart-box').addClass('open');
                    }, 0);
                }
            }
        });
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.cart-menu').is(event.target) && $('.cart-menu').has(event.target).length === 0 && !$('.cart-menu a').is(event.target)) {
                $('.cart-menu').removeClass('opened');
                $('.cart-menu .cart-box').removeClass('open');
                $('.black-overlay').remove();
            }
        });


        /* =================================
         ===  Topbar                 ====
         =================================== */
        $(this).on('click', '.topbar .close-icon', function () {
            $('.topbar').addClass('closed');
            $('header.header').addClass('no-topbar');
        });


        /* =================================
         ===  Scroll Link                 ====
         =================================== */
        $(window).on('load', function () {
            var elem = $('#' + window.location.hash.replace('#', ''));
            if (elem.length) {
                setTimeout(function () {
                    $('html,body').animate({scrollTop: elem.offset().top}, 1000, 'swing');
                }, 1500);
            }
        });
        $(".scroll").click(function () {
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('html,body').animate({scrollTop: dest}, 1000, 'swing');
        });


        /* =================================
         ===  Scroll Nav                 ====
         =================================== */
        var ctrl = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            offset: 40
        })
            .on("enter", function () {
                $('header.header').adtop_animation('flipInX');
                $('header.header')
                    .css({
                        position: 'fixed'
                    })
                    .addClass('is-sticky');
            })
            .on("leave", function () {
                $('header.header').adtop_animation('flipInX');
                $('header.header')
                    .css({
                        position: 'absolute'
                    })
                    .removeClass('is-sticky');
            })
            .addTo(ctrl);


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
         ===  Switch Layout                 ====
         =================================== */
        $(this).on('click', '.switch-layout a', function() {
            var type = $(this).data('type');
            var list_products = $('.wrap-product .list-products');
            $('.switch-layout li').removeClass();
            $(this).parent().addClass('active');
            if(type === 'list') {
                list_products.find('.row > div').removeClass().addClass('col-xs-12');
            } else {
                list_products.find('.row > div').removeClass().addClass('col-sm-4 col-xs-6');
            }
        });


        /* =================================
         ===  Checkout Quantity         ====
         =================================== */
        $(this).on('click', '.wrap-quantity .plus-icon', function () {
            var this_quantity_input = $(this).closest('.wrap-quantity').find('input');
            var this_quantity_value = parseInt(this_quantity_input.val());
            this_quantity_input.val(this_quantity_value + 1);
        });
        $(this).on('click', '.wrap-quantity .minus-icon', function () {
            var this_quantity_input = $(this).closest('.wrap-quantity').find('input');
            var this_quantity_value = parseInt(this_quantity_input.val());
            if (this_quantity_value > 1) {
                this_quantity_input.val(this_quantity_value - 1);
            }
        });

        /* =================================
         ===  Checkout Page             ====
         =================================== */
        $(this).on('change', '.wrap-checkout #send-gift-checkbox', function () {
            if(this.checked) {
                $('.receive-gift-info').removeClass('hidden');
            } else {
                $('.receive-gift-info').addClass('hidden');
            }
        });

        /* =================================
         ===  Product Page              ====
         =================================== */
        $(this).on('change', '.quickview-modal #add-topping-checkbox', function () {
            if(this.checked) {
                $('.add-topping-content').removeClass('hidden');
            } else {
                $('.add-topping-content').addClass('hidden');
            }
        });
        $(this).on('change', '.quickview-modal #require-checkbox', function () {
            if(this.checked) {
                $('.require-content').removeClass('hidden');
            } else {
                $('.require-content').addClass('hidden');
            }
        });

        /* =================================
         ===  Index Page                ====
         =================================== */
        $(this).on('change', '.custom-date-select .custom-radio input', function (event) {
            var checkedVal = $(this).val();

            if (checkedVal === 'custom') {
                event.preventDefault();
                $('.custom-date-select').addClass("open");
                $('.custom-date-select .text-value').attr("aria-expanded","true");
                $('.custom-date-select .custom-content').removeClass('hidden');
                $('.custom-date-select .text-value').text('');
                return;
            } else {
                var label = $(this).parent().find('.css-label');

                $('.custom-date-select .text-value').text(label.text());
                $('.custom-date-select .custom-content').addClass('hidden');
                $('.custom-date-select .date-checkbox input').prop('checked', false);
            }
        });

        $(this).on('change', '.custom-date-select .date-checkbox input', function () {
            var allCheckboxSelected = $('.custom-date-select .date-checkbox input:checked');
            var selectDate = '';
            for (var i = 0; i < allCheckboxSelected.length; i++) {
                var dataText = $(allCheckboxSelected[i]).attr('data-text');
                selectDate = selectDate + dataText + ' ';
            }

            $('.custom-date-select .text-value').text(selectDate);
        });

        /* =================================
         ===  Schedule Page             ====
         =================================== */

        $('.edit-schedule-modal').on('hidden.bs.modal', function(){
            console.log('hidden');
            $('.edit-schedule-modal .custom-select').select2("close");
        });

        /* =================================
         ===  Orther history Page       ====
         =================================== */
        $(this).on('click', '.review-order-modal .star-wrapper .star', function () {
            if ($(this).hasClass('star-yellow')) {
                $(this).removeClass('star-yellow');
                $(this).addClass('star-gray');
            } else {
                $(this).removeClass('star-gray');
                $(this).addClass('star-yellow');
            }
        });
        $(this).on('click', '.download-order-modal .btn-send-order', function () {
            $('.download-order-modal').modal('hide');
        });
    });

})(window.jQuery);