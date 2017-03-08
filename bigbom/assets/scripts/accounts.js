if (adblock) {
    document.documentElement.innerHTML = '<html><head><title>Hãy tắt AdBlock!</title></head><body><h1 style="text-align: center;margin: 2em auto;">Hãy tắt AdBlock để trải nghiệm BigBom.</h1></body></html>';
}

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

    $(document).ready(function () {

        /* =================================
         ===  Minimal Menu                 ====
         =================================== */
        myMinimalMenu();


        /* =================================
         ===  Fancy Box                 ====
         =================================== */
        myFancybox('.fancybox');


        /* =================================
         ===  Dropdown Fade                 ====
         =================================== */
        myDropdown();


        /* =================================
         ===  Tooltip                 ====
         =================================== */
        myTooltip();


        /* =================================
         ===  Only Number                 ====
         =================================== */
        onlynumber();


        /* ================================
         ===  Custom Select                 ====
         =================================== */
        mySelect2('.custom-select', {
            minimumResultsForSearch: Infinity
        });


        /* ================================
         ===  Fix Checkbox                 ====
         =================================== */
        fixCheckboxInTable();


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        $(".main-content .selected-box").sticky({
            topSpacing: 0,
            bottomSpacing: $('footer.footer').height() + $('.foot-main-content').height() + 66
        });
        $(".wrap-statistic .top-statistic-inner").sticky({
            topSpacing: 0
        });

        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        $(".main-content .selected-box").mCustomScrollbar();
        $(".list-multi-level.has-scroll").mCustomScrollbar();
        $(".fancy-select .options").mCustomScrollbar();
        $(".preview-ads-content .tab-content .tab-pane").mCustomScrollbar();
        $(".preview-ads-content .preview-inner").mCustomScrollbar();
        $(".create-ads-content .list-ads").mCustomScrollbar();
        $(".create-ads-content .create-ads-input").mCustomScrollbar();
        $(".create-ads-content .list-inputed").mCustomScrollbar();
        $(".file-manager .list-items").mCustomScrollbar();
        $(".wrap-tabs-location .tab-content .tab-pane").mCustomScrollbar();


        /* ================================
         ===  Copy Clipboard                 ====
         =================================== */
        myCopyClipboard('.copy-referral-btn', 'Sao chép thành công.');


        /* =================================
         ===  Mobile menu                 ====
         =================================== */
        $(this).on('click', '.menu-button', function () {
            if ($('.sidebar').hasClass('opened')) {
                $('.sidebar').removeClass('opened');
                $('.sidebar').css({
                    'transform': 'translateX(0)'
                });
            } else {
                $('.sidebar').addClass('opened');
                if (Modernizr.mq('(min-width: 480px)')) {
                    $('.sidebar').css({
                        'transform': 'translateX(400px)'
                    });
                } else {
                    $('.sidebar').css({
                        'transform': 'translateX(100%)'
                    });
                }
            }
        });
        $(this).on('click', '.close-sidebar', function () {
            $('.sidebar').removeClass('opened');
            $('.sidebar').css({
                'transform': 'translateX(0)'
            });
        });
        $(window).on('load resize', function () {
            if (Modernizr.mq('(min-width: 1200px)')) {
                $('.sidebar').removeAttr('style');
            }
        });
        $(document).on('mouseup', '.main', function (event) {
            if (!$('.sidebar').is(event.target) && $('.sidebar').has(event.target).length === 0 && !$('.menu-button').is(event.target)) {
                if ($('.sidebar').hasClass('opened')) {
                    $('.sidebar').removeClass('opened');
                    $('.sidebar').css({
                        'transform': 'translateX(0)'
                    });
                }
            }
        });


        /* =================================
         ===  List multi level                 ====
         =================================== */
        myListMultiLevel();


        /* =================================
         ===  Account                 ====
         =================================== */
        $(this).on('click', '#billing-requirements-chk', function () {
            if (this.checked) {
                $('.billing-info').removeClass('hidden');
            } else {
                $('.billing-info').addClass('hidden');
            }
        });


        /* =================================
         ===  Payment                 ====
         =================================== */
        $(this).on('click', '.payment-method-content .edit-payment', function () {
            var this_row = $(this).closest('.payment-method-row');
            this_row.find('.payment-method-content').addClass('hidden');
            this_row.find('.payment-method-form-edit').removeClass('hidden');
            return false;
        });
        $(this).on('click', '.payment-method-form-edit .cancel-btn', function () {
            var this_row = $(this).closest('.payment-method-row');
            this_row.find('.payment-method-form-edit').addClass('hidden');
            this_row.find('.payment-method-content').removeClass('hidden');
            return false;
        });
        $(this).on('click', '.payment-method-header .add-payment-method', function () {
            var i = 0;
            var callback = function () {
                if (i < $('.payment-method-row').length) {
                    $($('.payment-method-row')[i]).adtop_animation('fadeOutLeft', function () {
                        $(this).hide();
                    });
                    ++i;
                    setTimeout(callback, 100);
                } else {
                    setTimeout(function () {
                        $('.payment-method-form-add').removeClass('hidden').adtop_animation('fadeInRight');
                    }, 400);
                }
            };
            callback();
            $(this).removeClass().text('Quay lại').addClass('back-payment-method highlight');
            return false;
        });
        $(this).on('click', '.payment-method-header .back-payment-method', function () {
            var i = 0;
            var callback = function () {
                if (i < $('.payment-method-row').length) {
                    $($('.payment-method-row')[i]).show().adtop_animation('fadeInLeft', function () {
                        // $(this).hide();
                    });
                    ++i;
                    setTimeout(callback, 100);
                }
            };
            $('.payment-method-form-add').adtop_animation('fadeOutRight', function () {
                $(this).addClass('hidden');
                callback();
            });
            $(this).removeClass().text('Thêm phương thức thanh toán').addClass('green-btn add-payment-method');
            return false;
        });
        $('#country-select').fancySelect({
            optionsClass: 'has-label',
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                var flag = optionEl.data('flag');
                return "<label><i class='flag flag-" + flag + "'></i> <span>" + optionEl.text() + "</span></label>";
            }
        }).on('change.fs', function () {
            var $parent = $(this).parent();
            var $selectedEl = $parent.find('.options').find('.selected');
            $parent.parent().find('.trigger.selected').html($selectedEl.find('label').html())
            $('.select-payment').removeClass('hidden');

            $('#default-visa').removeClass('hidden');
        });
        $(".select-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group5-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group5-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group4-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group4-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group3-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group3-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group2-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group2-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group1-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group1-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group6-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group6-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group8-location input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group8-location div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group8-location input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group8-location div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group10-location input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group10-location div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $("#radio-group1-payment input[type=radio]").change(function () {
            var divId = $(this).attr("id");
            $("#radio-group1-payment div.check").addClass('hidden');
            $("." + divId).removeClass('hidden');
        });
        $(this).on('click', '.invoice', function () {
            if (this.checked) {
                $(".visa").find('.show-invoice').removeClass('hidden');
            } else {
                $(".visa").find('.show-invoice').addClass('hidden');
            }
        });
        $(this).on('focusin', '.card-input input[type="text"]', function () {
            var val = $(this).attr('id');

            $('.showcard-input .' + val + '-targeting').removeClass('hidden');

            $(".showcard-input div").each(function (index) {
                var className = $(this).attr('class');
                var res = className.split("-");
                var my_res = res[0];
                if (my_res == val) {
                    $('.showcard-input .' + val + '-targeting').removeClass('hidden');
                } else {
                    $('.showcard-input .' + my_res + '-targeting').addClass('hidden');
                }

            });

        });
        $(this).on('focusout', '.card-input input[type="text"]', function () {
            var val = $(this).attr('id');
            $('.showcard-input .' + val + '-targeting').addClass('hidden');
            $(".showcard-input div").each(function (index) {
                var className = $(this).attr('class');
                var res = className.split("-");
                var my_res = res[0];
                if (my_res == val) {
                    $('.showcard-input .' + val + '-targeting').removeClass('hidden');
                } else {
                    $('.showcard-input .' + my_res + '-targeting').addClass('hidden');
                }
            });
        });


        /* =================================
         ===  Permission                 ====
         =================================== */
        $('.main').on('click', '.floating-area .floating-inner .close-icon', function () {
            $(this).closest('.floating-inner').adtop_animation('fadeOutRight', function () {
                $(this).closest('.floating-area').removeClass('visible');
                $(this).unstick();
                $(this).sticky('update');
            });
            $('.black-overlay').removeClass('visible');
            $('footer.footer').removeClass('overlay');
        });
        $(document).on('mouseup', '.main', function (e) {
            floatingClickOutside('create-account', e);
            floatingClickOutside('edit-account', e);
            floatingClickOutside('change-account', e);
            floatingClickOutside('invite-manager', e);
        });
        $(this).on('click', '.main-content .floating-link', function () {
            if (typeof $(this).data('type') !== 'undefined') {
                var type = $(this).data('type');
                $(".floating-" + type + " .floating-inner").sticky({
                    topSpacing: 0
                });
                $(".floating-" + type + " .floating-inner").sticky('update');
                floatingClick(type);
            }
            return false;
        });
        $(this).on('click', '.main-content .remove-link', function () {
            addMessage('Xóa tài khoản thành công.');
        });
        $(this).on('focus', '.leave-group-modal .wrap-chosen .leave-chosen-2-ip', function () {
            $(this).prev('label').click();
        });


        /* =================================
         ===  Close Message                 ====
         =================================== */
        $(this).on('click', '.message i', function () {
            $(this).parent().adtop_animation('fadeOutUp', function () {
                $(this).remove();
                $('.main').removeClass('has-message');
                $(".main .message").unstick();
                $(".main .message").sticky('update');
            });
        });


        /* =================================
         ===  Account Manager                 ====
         =================================== */
        $(this).on('click', '.wrap-manager .invite-account-btn', function () {
            var this_parent = $(this).parent();
            this_parent.find('.no-account').addClass('hidden');
            this_parent.find('.account-info').removeClass('hidden').adtop_animation('fadeIn');
            // $(this).attr('disabled', true);
        });
        $(this).on('click', '.wrap-manager .custom-permission-link', function () {
            var custom_permission_box = $(this).parent().next();
            if ($(this).hasClass('.opened')) {
                $(this).removeClass('.opened');
                custom_permission_box.addClass('hidden');
            } else {
                $(this).addClass('.opened');
                custom_permission_box.removeClass('hidden').adtop_animation('fadeIn');
            }
        });
        $(this).on('click', '.wrap-manager #share-account-linking-chk', function () {
            var share_account_box = $(this).parent().find('.share-account-box');
            if (this.checked) {
                share_account_box.removeClass('hidden').adtop_animation('fadeIn');
            } else {
                share_account_box.addClass('hidden');
            }
        });


    });

})(window.jQuery);