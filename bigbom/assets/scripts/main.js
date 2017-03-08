if (adblock) {
    document.documentElement.innerHTML = '<html><head><title>Hãy tắt AdBlock!</title></head><body><h1 style="text-align: center;margin: 2em auto;">Hãy tắt AdBlock để trải nghiệm BigBom.</h1></body></html>';
}

(function ($) {

    "use strict";

    $(document).ready(function () {

        console.log("%cDừng lại!", "color: red; font-size: 5em; font-weight: bold; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;");
        console.log("%cĐây là một tính năng của trình duyệt dành cho các nhà phát triển. Nếu ai đó bảo bạn sao chép-dán nội dung nào đó vào đây để bật một tính năng của BigBom hoặc \"hack\" tài khoản của người khác, thì đó là hành vi lừa đảo và sẽ khiến họ có thể truy cập vào tài khoản BigBom của bạn.", "font-size: 2em;");

        /* =================================
         ===  Minimal Menu                 ====
         =================================== */
        myMinimalMenu();


        /* =================================
         ===  Fancy Box                 ====
         =================================== */
        myFancybox('.fancybox');


        /* =================================
         ===  Tooltip                 ====
         =================================== */
        myTooltip();


        /* =================================
         ===  Dropdown Fade                 ====
         =================================== */
        myDropdown();


        /* ================================
         ===  Fix Checkbox                 ====
         =================================== */
        fixCheckboxInTable();


        /* =================================
         ===  StickyJS                 ====
         =================================== */
        if ($('.top-statistic').length) {
            $(window).on('load resize', function () {
                if (Modernizr.mq('(min-width: 858px)')) {
                    // mySticky('.top-statistic', 36);
                    mySticky('.top-statistic', 71);
                }
            });
        }


        /* =================================
         ===  Only Number                 ====
         =================================== */
        onlynumber();


        /* =================================
         ===  Number Format                 ====
         =================================== */
        numberFormat('.number-format', '000.000.000.000.000');


        /* =================================
         ===  Select All Text                 ====
         =================================== */
        selectAllText('.code-box');


        /* ================================
         ===  Sticky Selected Box                 ====
         =================================== */
        stickySelectedBox();


        /* =================================
         ===  Ads Target                 ====
         =================================== */
        $('.form-target').on({
            mouseover: function () {
                $(this).find('.hover-content').addClass('visible');
            },
            mouseleave: function () {
                $(this).find('.hover-content').removeClass('visible');
            }
        }, '.fancy-select li');


        /* =================================
         ===  Schedule Table                 ====
         =================================== */
        if ($('.scheduleTable').length) {
            $('.scheduleTable').scheduleTable();
        }

        $.datepicker.setDefaults(
            $.extend({
                'dateFormat': 'dd/mm/yy'
            }, $.datepicker.regional['vi'])
        );


        /* =================================
         ===  List multi level                 ====
         =================================== */
        myListMultiLevel();


        /* =================================
         ===  Count Character                 ====
         =================================== */
        countCharacter();


        /* =================================
         ===  List Selected                 ====
         =================================== */
        $(this).on('click', '.list-selected .selected-item .close-icon', function () {
            var list_selected = $(this).closest('.list-selected');
            var list_all = list_selected.parent().children('.list-all');
            if (list_selected.find('.selected-item').length === 1) {
                list_selected.addClass('hidden');
            }
            $(this).closest('.selected-item').remove();
            list_all.find('li:contains(' + $(this).prev('h4').text() + ')').show();
        });


        /* =================================
         ===  Account Linking                 ====
         =================================== */
        $(this).on('click', '.wrap-account-linking .request-secret-link', function () {
            $('.request-secret-form').removeClass('hidden');
            $(this).closest('.linking-now').addClass('hidden');
            $(this).closest('.list-accounts').addClass('hidden');

        });
        $(this).on('click', '.request-secret-form .add-icon', function () {
            var this_wrap = $(this).closest('.wrap-ads-id');
            this_wrap.before('<div class="wrap-ads-id"><input class="custom-input" type="text" placeholder="Ads ID" /><span class="delete-icon"><i class="material-icons">delete</i></span></div>');
        });
        $(this).on('click', '.request-secret-form .delete-icon', function () {
            $(this).closest('.wrap-ads-id').remove();
        });
        $(this).on('click', '.request-secret-form .send-btn', function () {
            $('.request-secret-form').addClass('hidden');
            $('.request-secret-successful').removeClass('hidden');
            return false;
        });


        /* =================================
         ===  Create Campaign                 ====
         =================================== */
        $(this).on('click', '.location-section .btn-group a', function () {
            if (!$(this).hasClass('active')) {
                $('.location-section .btn-group a').removeClass('active');
                $(this).addClass('active');
            }
            return false;
        });
        $(this).on('click', '.target-section input[type="radio"]', function () {
            var id = $(this).attr('id');
            if (this.checked) {
                if (id === 'target-1') {
                    $('.device-section').addClass('hidden');
                    $('.os-section').removeClass('hidden');
                } else {
                    $('.os-section').addClass('hidden');
                    $('.device-section').removeClass('hidden');
                }
            }
        });
        $(this).on('click', '.device-section .link', function () {
            $(this).parent().addClass('hidden');
            $('.device-type').removeClass('hidden');
            $('.wrap-device-box').removeClass('hidden');
            return false;
        });
        $(this).on('click', '.device-box .all-options', function () {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $(this).find('i').removeClass().addClass('fa fa-angle-down');
            } else {
                $(this).addClass('opened');
                $(this).find('i').removeClass().addClass('fa fa-angle-up');
            }
            return false;
        });
        $(document).on('mouseup', '.main', function (e) {
            var container = $('.wrap-options-result');
            if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.device-box .all-options').is(e.target)) {
                $('.device-box .all-options').removeClass('opened');
                $('.device-box .all-options').find('i').removeClass().addClass('fa fa-angle-down');
            }
        });
        $(this).on('click', '.os-section .option-devices .option-chk', function () {
            var this_wrap_devices = $(this).closest('.wrap-devices');
            if (this.checked) {
                this_wrap_devices.find('.all-devices input[type="checkbox"]').prop('disabled', true);
                this_wrap_devices.find('.option-devices .search-device-form').removeClass('hidden');
                this_wrap_devices.find('.option-devices .list-multi-level').removeClass('hidden');
                this_wrap_devices.find('.option-devices .list-multi-level').mCustomScrollbar();
            } else {
                this_wrap_devices.find('.all-devices input[type="checkbox"]').prop('disabled', false);
                this_wrap_devices.find('.option-devices .search-device-form').addClass('hidden');
                this_wrap_devices.find('.option-devices .list-multi-level').addClass('hidden');
            }
        });
        $(this).on('click', '.network-section .link', function () {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.network-section .list-multi-level').addClass('hidden');
            } else {
                $(this).addClass('opened');
                $('.network-section .list-multi-level').removeClass('hidden');
                $('.network-section .list-multi-level').mCustomScrollbar();
            }
            return false;
        });


        /* =================================
         ===  Create Rules                 ====
         =================================== */
        $(this).on('click', '.rules-type .type-item', function () {
            if (!$(this).hasClass('active')) {
                $('.rules-type .type-item').removeClass('active');
                $(this).addClass('active');
            }
        });
        $(this).on('click', '.budget-section .scheduled-link', function () {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.schedule-section').addClass('hidden');
            } else {
                $(this).addClass('opened');
                $('.schedule-section').removeClass('hidden');
                $('html, body').animate({
                    scrollTop: $('.schedule-section').offset().top
                }, 1000);
            }
            return false;
        });
        $(this).on('click', '.bidding-section input[type="radio"]', function () {
            var type = $(this).attr('id');
            if (this.checked && type === 'manual-bidding') {
                $('.manual-bidding-content').removeClass('hidden');
            } else {
                $('.manual-bidding-content').addClass('hidden');
            }
        });


        /* =================================
         ===  Add manager                 ====
         =================================== */
        $(this).on('click', '.wrap-add-manager .update-link', function () {
            var this_row = $(this).closest('.add-manager-row');
            this_row.find('.add-manager-content').addClass('edit');
            this_row.find('.add-manager-actions').addClass('hidden');
            this_row.find('.add-manager-btns').removeClass('hidden');
        });
        $(this).on('click', '.wrap-add-manager .cancel-link', function () {
            var this_row = $(this).closest('.add-manager-row');
            this_row.find('.add-manager-content').removeClass('edit');
            this_row.find('.add-manager-actions').removeClass('hidden');
            this_row.find('.add-manager-btns').addClass('hidden');
        });
        $(this).on('click', '.wrap-add-manager .remove-link', function () {
            addMessage('Xóa tài khoản thành công.');
        });


        /* =================================
         ===  Create Channels                 ====
         =================================== */
        var test_code_val = "<!-- Facebook Pixel Code --><script>!function(e,n,t,a,c,o,s){e.fbq||(c=e.fbq=function(){c.callMethod?c.callMethod.apply(c,arguments):c.queue.push(arguments)},e._fbq||(e._fbq=c),c.push=c,c.loaded=!0,c.version=\"2.0\",c.queue=[],o=n.createElement(t),o.async=!0,o.src=a,s=n.getElementsByTagName(t)[0],s.parentNode.insertBefore(o,s))}(window,document,\"script\",\"//connect.facebook.net/en_US/fbevents.js\"),fbq(\"init\",\"756059327855895\"),fbq(\"track\",\"PageView\");</script><noscript><img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=756059327855895&ev=PageView&noscript=1\" /></noscript><!-- End Facebook Pixel Code -->";
        var test_code_val2 = "<!-- Google Code for test Conversion Page --><script type=\"text/javascript\">/* <![CDATA[ */ var google_conversion_id=953167574,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"LMBpCJ26ymIQ1t3AxgM\",google_conversion_value=1,google_conversion_currency=\"VND\",google_remarketing_only=!1; /* ]]> */</script><script type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\"></script><noscript><div style=\"display:inline;\"><img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//www.googleadservices.com/pagead/conversion/953167574/?value=1.00&amp;currency_code=VND&amp;label=LMBpCJ26ymIQ1t3AxgM&amp;guid=ON&amp;script=0\"/></div></noscript>";
        $('#facebook-channel .custom-select').fancySelect().on('change.fs', function () {
            var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
            $('.wrap-create-channels #facebook-channel .code-section').removeClass('hidden');
            $('.wrap-create-channels #facebook-channel .code-section textarea').val(test_code_val);
            addMessage('Để xác minh rằng pixel đang hoạt động đúng, hãy kiểm tra pixel đó bằng cách chuyển đến trang web mà bạn đã đặt pixel. Nếu pixel hoạt động, pixel sẽ gửi lại thông tin đó đến Facebook.', 'error');
            $('#facebook-channel .save-btn').removeClass('gray-btn').addClass('green-btn').attr('href', 'facebook-web-banner.html');
            ;
        });
        $(this).on('click', '.wrap-cr-code .cr-value input[type="radio"]', function () {
            if (this.checked) {
                $('.wrap-inut-value').addClass('hidden');
                $(this).parent().find('.wrap-inut-value').removeClass('hidden');
            }
        });
        $(this).on('click', '.cr-code-section .primary-link', function () {
            $(this).remove();
            $('.cr-code-section > label').text('');
            $('.wrap-cr-code').removeClass('hidden');
            $('#google-channel .save-btn').text('Tạo chuyển đổi').removeClass().addClass('green-btn create-cr-btn');
            return false;
        });
        $(this).on('click', '.wrap-cr-code .cr-action input[type="radio"]', function () {
            var action_type = $(this).attr('id');
            if (this.checked) {
                $('.cr-value input[type="radio"]').removeAttr('checked');
                if (action_type === 'action-1') {
                    $('.url-reposted').addClass('hidden');
                    $('.cr-category').addClass('hidden');
                    $('.cr-duration').addClass('hidden');
                    $('.cr-quantity').addClass('hidden');
                    $('.cr-value .in-app').removeClass('hidden');
                    $('.cr-value .in-app:first label').simulateClick('click');
                    $('.cr-value .install-app').addClass('hidden');
                } else if (action_type === 'action-2') {
                    $('.url-reposted').removeClass('hidden');
                    $('.cr-category').addClass('hidden');
                    $('.cr-duration').addClass('hidden');
                    $('.cr-quantity').addClass('hidden');
                    $('.cr-value .in-app').removeClass('hidden');
                    $('.cr-value .in-app:first label').simulateClick('click');
                    $('.cr-value .install-app').addClass('hidden');
                } else if (action_type === 'action-3') {
                    $('.url-reposted').addClass('hidden');
                    $('.cr-category').removeClass('hidden');
                    $('.cr-duration').removeClass('hidden');
                    $('.cr-quantity').removeClass('hidden');
                    $('.cr-value .in-app').addClass('hidden');
                    $('.cr-value .install-app').removeClass('hidden');
                    $('.cr-value .install-app:first label').simulateClick('click');
                }
            }
        });
        $(this).on('click', '#google-channel .create-cr-btn', function () {
            $('.wrap-create-channels #google-channel .code-section').removeClass('hidden');
            $('.wrap-create-channels #google-channel .code-section textarea').val(test_code_val2);
            $('.cr-code-section').addClass('hidden');
            $(this).text('Lưu & Tiếp tục').removeClass('create-cr-btn').addClass('save-btn');
            $(this).after('<a class="link mgl-20 create-new">Tạo mã code mới</a>');
            return false;
        });
        $(this).on('click', '#google-channel .create-new', function () {
            $('.wrap-create-channels #google-channel .code-section').addClass('hidden');
            $('.wrap-create-channels #google-channel .code-section textarea').val('');
            $('.cr-code-section').removeClass('hidden');
            $('#google-channel .save-btn').text('Tạo chuyển đổi').removeClass('save-btn').addClass('create-cr-btn');
            $(this).remove();
            return false;
        });


        /* =================================
         ===  Create Ads                 ====
         =================================== */
        $(this).on('click', '.create-ads-tab-link', function () {
            $('.wrap-create-ads .main-tabs li a[href="#create-ads"]').trigger('click');
            return false;
        });
        $('.wrap-create-ads .main-tabs a[data-toggle="tab"]').on('shown.bs.tab', function () {
            checkCountCharacter();
        });
        $(this).on('click', '.create-ads-input .enhance-options-link', function () {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $(this).next('.wrap-enhance-options').addClass('hidden');
            } else {
                $(this).addClass('opened');
                $(this).next('.wrap-enhance-options').removeClass('hidden');
            }
            return false;
        });
        $(this).on('click', '.create-ads-input .tracking-ga-link', function () {
            var this_create_ads_input = $(this).closest('.create-ads-input');
            var this_ads_common = this_create_ads_input.find('.ads-common');
            // if (this.checked) {
            this_ads_common.adtop_animation('fadeOutLeft', function () {
                this_ads_common.addClass('hidden');
                this_create_ads_input.find('.ads-tracking-ga').removeClass('hidden').adtop_animation('fadeInRight');
                // this_ads_common.find('.tracking-ga-link').prop('checked', false);
            });
            // }
        });
        $(this).on('click', '.create-ads-input .custom-url-tracking-link', function () {
            var this_create_ads_input = $(this).closest('.create-ads-input');
            var this_ads_common = this_create_ads_input.find('.ads-common');
            this_ads_common.adtop_animation('fadeOutLeft', function () {
                this_ads_common.addClass('hidden');
                this_create_ads_input.find('.custom-url-tracking').removeClass('hidden').adtop_animation('fadeInRight');
            });
            return false;
        });
        $(this).on('click', '.create-ads-input .back-common-link', function () {
            var this_create_ads_input = $(this).closest('.create-ads-input');
            this_create_ads_input.find('.mCSB_container').children('div:not(.hidden)').adtop_animation('fadeOutRight', function () {
                this_create_ads_input.find('.mCSB_container').children('div:not(.hidden)').addClass('hidden');
                this_create_ads_input.find('.ads-common').removeClass('hidden').adtop_animation('fadeInLeft');
            });
            return false;
        });
        $(this).on('click', '.preview-ads-footer .remove-icon', function () {
            addMessage('Xóa banner thành công.');
        });
        $('.wrap-input-preview .network-preview-tab .custom-select').fancySelect().on('change.fs', function () {
            var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
            var this_wrap_select = $(this).closest('.wrap-select');
            if (raw_val == 1) {
                this_wrap_select.next('.wrap-preview').html('<img src="assets/images/ads-img5.jpg" alt="img" />');
            } else if (raw_val == 2) {
                this_wrap_select.next('.wrap-preview').html('<img src="assets/images/ads-img6.png" alt="img" />');
            } else if (raw_val == 3) {
                this_wrap_select.next('.wrap-preview').html('<img src="assets/images/ads-img7.jpg" alt="img" />');
            }

        });
        $(this).on('click', '.preview-ads-footer .video-carousel .thumbnail img', function () {
            $('.preview-ads-footer .video-carousel .thumbnail').removeClass('active').find('.choose-icon').remove();
            $(this).parent().addClass('active').prepend('<span class="choose-icon"></span>');
            return false;
        });
        $(this).on('click', '.content-box .enhance-options-link', function () {
            var this_content_box = $(this).closest('.content-box');
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                this_content_box.find('.wrap-enhance-options').addClass('hidden');
            } else {
                $(this).addClass('opened');
                this_content_box.find('.wrap-enhance-options').removeClass('hidden');
            }
            return false;
        });
        $(this).on('click', '.wrap-create-ads .target-marketing-section input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 0) {
                    $('.promote-actions-section').addClass('hidden');
                } else {
                    $('.promote-actions-section').removeClass('hidden');
                }
            }
        });
        $(this).on('click', '.wrap-create-ads .targeting-section input[type="checkbox"]', function () {
            var val = $(this).parent().attr('data-raw-value');
            if (this.checked) {
                $('.targeting-section .' + val + '-targeting').removeClass('hidden');
            } else {
                $('.targeting-section .' + val + '-targeting').addClass('hidden');
            }
        });
        $(this).on('click', '.wrap-create-ads .limit-show-section input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 0) {
                    $('.limit-show-section input[type="text"]').prop('disabled', true);
                    $('.limit-show-section .custom-select').trigger('disable');
                } else {
                    $('.limit-show-section input[type="text"]').prop('disabled', false);
                    $('.limit-show-section .custom-select').trigger('enable').trigger('update');
                }
            }
        });
        $(this).on('click', '.create-ads-input .mobile-url-link', function () {
            if (this.checked) {
                $(this).parent().find('.wrap-mobile-url').removeClass('hidden');
            } else {
                $(this).parent().find('.wrap-mobile-url').addClass('hidden');
            }
        });
        $(this).on('click', '.create-ads-input .custom-url-tracking .add-custom-url', function () {
            $(this).next().after("<div class=\"wrap-custom-url\">{_ <input class=\"custom-input w-100\" type=\"text\" placeholder=\"Tên\" /> _} = <input class=\"custom-input url-value-input\" type=\"text\" placeholder=\"Giá trị\" /></div>");
            if ($('.create-ads-input .custom-url-tracking .wrap-custom-url').length == 3) {
                $(this).remove();
            }
            return false;
        });
        $(this).on('click', '.wrap-create-ads .search-type-section input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 2) {
                    $('.extension-section').addClass('hidden');
                    $('.google-display-network-section').addClass('hidden');
                    $('.limit-show-section').addClass('hidden');
                    $('.content-box').removeClass('has-selected');
                    $('.selected-box').addClass('hidden');
                    $('.automated-targeting-section').removeClass('hidden');
                    $('.keyword-section').addClass('hidden');
                    $('.search-type-extend').removeClass('hidden');
                } else {
                    if ($(this).val() == 1) {
                        $('.limit-show-section').addClass('hidden');
                        $('.google-display-network-section').addClass('hidden');
                    } else {
                        $('.limit-show-section').removeClass('hidden');
                        $('.google-display-network-section').removeClass('hidden');
                    }
                    $('.extension-section').removeClass('hidden');
                    $('.content-box').addClass('has-selected');
                    $('.selected-box').removeClass('hidden');
                    $('.automated-targeting-section').addClass('hidden');
                    $('.keyword-section').removeClass('hidden');
                    $('.search-type-extend').addClass('hidden');
                }
            }
        });
        $(this).on('click', '.automated-targeting-section input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 2) {
                    $('.automated-targeting-section .wrap-automated-targeting').removeClass('hidden');
                } else {
                    $('.automated-targeting-section .wrap-automated-targeting').addClass('hidden');
                }
            }
        });
        $(this).on('click', '.automated-targeting-section .wrap-automated-targeting .add-link', function () {
            var rs = $(this).parent().clone();
            rs.find('.custom-input').val('');
            rs.find('.fancy-select .trigger').detach();
            rs.find('.fancy-select .options').detach();
            rs.find('.custom-select').removeAttr('style').removeClass('fancified').unwrap('.fancy-select').fancySelect();
            rs.find('.add-link').removeClass().addClass('remove-link').html('<i class="fa fa-times"></i>');
            $(this).parent().before(rs);
            return false;
        });
        $(this).on('click', '.automated-targeting-section .wrap-automated-targeting .remove-link', function () {
            $(this).parent().remove();
            return false;
        });
        $('.main').on('click', '.floating-area .floating-inner .close-icon', function () {
            $(this).closest('.floating-inner').adtop_animation('fadeOutRight', function () {
                $(this).closest('.floating-area').removeClass('visible');
            });
            $('.black-overlay').removeClass('visible');
            $('footer.footer').removeClass('overlay');
        });
        $(document).on('mouseup', '.main', function (e) {
            floatingClickOutside('extension-call', e);
            floatingClickOutside('extension-link-site', e);
            floatingClickOutside('extension-evaluate', e);
            floatingClickOutside('extension-note', e);
            floatingClickOutside('extension-content-structured', e);
        });
        $(this).on('click', '.wrap-create-ads .extension-section input[type="checkbox"]', function () {
            if (typeof $(this).data('type') !== 'undefined') {
                var type = 'extension-' + $(this).data('type');
                if (this.checked) {
                    $(".floating-" + type + " .floating-inner").sticky({
                        topSpacing: 0
                    });
                    $(".floating-" + type + " .floating-inner").sticky('update');
                    floatingClick(type);
                    $(this).closest('.right-form-group').find('.link').removeClass('hidden');
                } else {
                    $(this).closest('.right-form-group').find('.link').addClass('hidden');
                }
            }
        });
        $(this).on('click', '.wrap-create-ads .extension-section .link', function () {
            var type = 'extension-' + $(this).data('type');
            $(".floating-" + type + " .floating-inner").sticky({
                topSpacing: 0
            });
            $(".floating-" + type + " .floating-inner").sticky('update');
            floatingClick(type);
        });
        $(this).on('click', '.floating-area .scheduled-link', function () {
            var this_main_floating = $(this).closest('.main-floating');
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                this_main_floating.find('.scheduled-time-section').addClass('hidden');
            } else {
                $(this).addClass('opened');
                this_main_floating.find('.scheduled-time-section').removeClass('hidden');
            }
            return false;
        });
        $(this).on('click', '.floating-area .scheduled-time-link', function () {
            var this_scheduled_time_section = $(this).closest('.scheduled-time-section');
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                this_scheduled_time_section.find('.wrap-time-slot').addClass('hidden');
            } else {
                $(this).addClass('opened');
                this_scheduled_time_section.find('.wrap-time-slot').removeClass('hidden');
            }
            return false;
        });
        $(this).on('click', '.floating-area .wrap-time-slot .add-time-slot', function () {
            var rs = $(this).parent().clone(true);
            rs.find('.custom-input').val('');
            rs.find('.fancy-select .trigger').detach();
            rs.find('.fancy-select .options').detach();
            rs.find('.custom-select').removeAttr('style').removeClass('fancified').unwrap('.fancy-select').fancySelect();
            rs.find('.add-time-slot').removeClass().addClass('remove-time-slot').html('<img alt="img" src="assets/images/close-icon.png" />');
            $(this).parent().before(rs);
            return false;
        });
        $(this).on('click', '.floating-area .wrap-time-slot .remove-time-slot', function () {
            $(this).parent().remove();
            return false;
        });
        $(this).on('click', '.floating-extension-content-structured .content-value-section .add-content-value', function () {
            $(this).before('<input class="custom-input mgb-10" type="text" placeholder="Giá trị" />');
            return false;
        });
        $(this).on('click', '.floating-area .footer-floating .save-btn', function () {
            var this_floating_inner = $(this).closest('.floating-inner');
            this_floating_inner.find('.main-floating').addClass('done');
            this_floating_inner.find('.floating-settings').addClass('hidden');
            this_floating_inner.find('.floating-results').removeClass('hidden');
            this_floating_inner.find('.create-new-link').removeClass('hidden');
            $(this).text('Lưu lựa chon');
            $(this).next('.gray-link').addClass('hidden');
            return false;
        });
        $(this).on('click', '.floating-area .header-floating .create-new-link', function () {
            var this_floating_inner = $(this).closest('.floating-inner');
            this_floating_inner.find('.main-floating').removeClass('done');
            this_floating_inner.find('.floating-settings').removeClass('hidden');
            this_floating_inner.find('.floating-results').addClass('hidden');
            this_floating_inner.find('.create-new-link').addClass('hidden');
            this_floating_inner.find('.save-btn').text('Lưu & Tiếp tục');
            this_floating_inner.find('.gray-link').removeClass('hidden');
            return false;
        });
        $(this).on('click', '.wrap-create-ads .demographic-section .custom-demographic-link', function () {
            $('.custom-demographic').removeClass('hidden');
            $(this).parent().remove();
            return false;
        });
        $(this).on('click', '.wrap-create-ads .favorite-section .custom-favorite-link', function () {
            $('.custom-favorite').removeClass('hidden');
            $(this).parent().remove();
            return false;
        });
        $(this).on('click', '.wrap-create-ads .narrowing-targets-section input[type="checkbox"]', function () {
            var val = $(this).parent().attr('data-raw-value');
            if (this.checked) {
                $('.narrowing-targets-section .' + val + '-narrowing-targets').removeClass('hidden');
            } else {
                $('.narrowing-targets-section .' + val + '-narrowing-targets').addClass('hidden');
            }
        });
        $('.wrap-tabs-location a[data-toggle="tab"]').on('shown.bs.tab', function () {
            $(".wrap-tabs-location .tab-content .tab-pane").mCustomScrollbar('update');
        });
        $(this).on('click', '.create-ads-input input[name="companion-banner"]', function () {
            if (this.checked) {
                if ($(this).val() == 1) {
                    $('.wrap-companion-banner-img').addClass('hidden');
                } else {
                    $('.wrap-companion-banner-img').removeClass('hidden');
                    $('.companion-banner-input-file').trigger('click');
                }
            }
        });
        $(this).on('click', '.wrap-create-ads .thumbnails-section img', function () {
            $('.wrap-create-ads .thumbnails-section li').removeClass('active');
            $(this).parent().addClass('active');
            return false;
        });
        $(this).on('click', '.wrap-create-ads .targeting-section input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 1) {
                    $('.targeting-section .targeting-select').trigger('disable');
                    $('.targeting-section .wrap-targeting-results').addClass('hidden');
                } else {
                    $('.targeting-section .targeting-select').trigger('enable').trigger('update');
                }
            }
        });
        $(this).on('click', '.wrap-business-location input[type="checkbox"]', function () {
            if (this.checked) {
                $('.business-location').show();
            } else {
                $('.business-location').hide();
            }
        });
        $(this).on('click', '.top-statistic .has-sub .right-text a', function () {
            var this_li = $(this).closest('.has-sub');
            $('.top-statistic .sub-menu').removeClass('open');
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
            } else {
                $('.date-view-picker').daterangepicker('close');
                $('.top-statistic .has-sub .right-text a').removeClass('opened');
                $(this).addClass('opened');
                this_li.find('.sub-menu').addClass('open');
            }
        });
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.top-statistic .sub-menu').is(event.target) && $('.top-statistic .sub-menu').has(event.target).length === 0 && !$('.top-statistic .has-sub .right-text a').is(event.target)) {
                $('.top-statistic .sub-menu').removeClass('open');
                $('.top-statistic .has-sub .right-text a').removeClass('opened');
            }
        });
        $(this).on('click', '.wrap-statistic .header-statistic-item .title', function () {
            if (Modernizr.mq('(max-width: 857px)')) {
                var this_parent = $(this).closest('.statistic-item');
                $('.wrap-statistic .main-statistic-item').hide();
                $('.wrap-statistic .header-statistic-item').removeAttr('style');
                $('.wrap-statistic .header-statistic-item .title span').remove();
                if ($(this).parent().hasClass('opened')) {
                    $(this).parent().removeClass('opened');
                } else {
                    $('.wrap-statistic .header-statistic-item').removeClass('opened');
                    this_parent.find('.main-statistic-item').css({
                        'margin': '0 -10px'
                    }).show();
                    $(this).parent().css({
                        'margin-bottom': 15
                    });
                    $('html, body').stop().animate({
                        'scrollTop': this_parent.find('.main-statistic-item').offset().top - 55
                    }, 500, 'swing');
                    if (this_parent.find('.content-slick').length) {
                        if ($('.main-statistic-item .content-slick').hasClass('slick-slider')) {
                            $('.main-statistic-item .content-slick').slick('unslick');
                        }
                        $('.main-statistic-item .content-slick').slick({
                            dots: true,
                            infinite: true,
                            fade: true,
                            cssEase: 'linear'
                        });
                    }
                    if (this_parent.find('.dropdown-tabs').length) {
                        var str = this_parent.find('.dropdown-tabs .dropdown-menu li.active a').text();
                        $(this).append(' <span>(' + str + ')</span>');
                    }
                    $(this).parent().addClass('opened');
                }
            }
            return false;
        });
        $('.devices-mobile-select').fancySelect().on('change.fs', function () {
            var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
            $('.statistic-left-tabs li.' + raw_val + ' a').trigger('click');
        });
        $('.header-statistic-item .dropdown-tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var str = $(this).text();
            $(this).closest('.header-statistic-item').find('.title span').remove();
            $(this).closest('.header-statistic-item').find('.title').append(' <span>(' + str + ')</span>');
        });
        $(this).on('click', '.list-ads .glyphicon-pencil.edit-folder-name-link', function () {
            $(this).parent('h4').addClass('edited');
            var tmp = $(this).prev('span').text();
            $(this).prev('span').html('<input type="text" value="' + tmp + '" />');
            $(this).removeClass('glyphicon-pencil').addClass('glyphicon-ok');
            var input = $(this).parent('h4').find('input');
            input.putCursorAtEnd().on("focus", function () {
                input.putCursorAtEnd()
            });
            return false;
        });
        $(this).on('click', '.list-ads .glyphicon-ok.edit-folder-name-link', function () {
            $(this).parent('h4').removeClass('edited');
            var tmp = $(this).parent('h4').find('input').val();
            $(this).prev('span').html(tmp);
            $(this).removeClass('glyphicon-ok').addClass('glyphicon-pencil');
            return false;
        });
        $(this).on('click', '.list-ads .ads-item.folder .wrap-media, .list-ads .view-folder-link', function () {
            $('.ads-rapidly-results').addClass('hidden');
            extractFolder(this);
            $('.ads-item.folder-item.open:first img').trigger('click');
            checkCountCharacter();
            $('.wrap-create-ads .wrap-list-ads .search-form input[type="text"]').val('');
            return false;
        });
        $(this).on('click', '.top-create-ads-content .current-folder .link', function () {
            $('.ads-rapidly-results').removeClass('hidden');
            $('.current-folder .folder-name').text('');
            $('.current-folder').addClass('hidden');
            $('.list-ads .ads-item').removeClass('hidden');
            $('.list-ads .folder-item').addClass('hidden').removeClass('open');
            checkCountCharacter();
            $('.wrap-create-ads .wrap-list-ads .search-form input[type="text"]').val('');
            return false;
        });
        $(this).on('click', '.list-per-ads .css-checkbox', function () {
            var count = $('.list-per-ads .css-checkbox:checked').length;
            $('.count-ads-text strong').text(count);
        });
        $(this).on('click', '.create-ads-input .upload-more-img .remove-link', function () {
            var this_wrap = $(this).closest('.upload-more-img');
            this_wrap.find('img').addClass('hidden');
            this_wrap.find('label').addClass('empty-label').text('Chọn ảnh thay thế');
            this_wrap.find('.remove-link').addClass('hidden');
            return false;
        });


        /* =================================
         === check show invoice         ====
         =================================== */
        $(this).on('click', '.invoice', function () {
            if (this.checked) {
                $(".visa").find('.show-invoice').removeClass('hidden');
            } else {
                $(".visa").find('.show-invoice').addClass('hidden');
            }
        });

        // Form select source
        $(this).on('click', '.gg-step1 .create-code', function () {
            var source = $('#source-select').val();
            if (source) {
                $('.gg-step1').addClass('hidden');
                $('[data-source]').addClass('hidden');
                if (source == 'web') {
                    $('[data-source=web]').removeClass('hidden');
                } else if (source == 'app') {
                    var app = $('#app-select select').first().val();
                    $('[data-source=' + app + ']').removeClass('hidden');
                }
            }
        });

        $(this).on('click', '.playpause', function () {
            $('.playpause span').toggleClass('glyphicon-play glyphicon-pause');
        });

        //tuychon custom 160413
        $(this).on('click', '.show-urltracing', function () {
            $(".tuychon1").toggleClass('hidden').siblings().addClass('hidden');

            var state = $('.tuychon1').is(":hidden");
            if (state) {
                $('.tuychon0').removeClass('hidden');
            }
        })
        $(this).on('click', '.show-google-analytic', function () {
            $(".tuychon2").removeClass('hidden').siblings().addClass('hidden');
            var state = $('.tuychon2').is(":hidden");
            if (state) {
                $('.tuychon0').removeClass('hidden');
            }
        })
        $(this).on('click', '.change-video-icon', function () {
            $(".tuychon3").removeClass('hidden').siblings().addClass('hidden');
            var state = $('.tuychon3').is(":hidden");
            if (state) {
                $('.tuychon0').removeClass('hidden');
            }
        })

        //show steps
        $(this).on('click', '.gg-step2 .update', function () {
            $('.info-pay-google').removeClass('hidden');
            $('.gg-step2').addClass('hidden');
            $('.createcode.google').removeClass('hidden');
        });

        $(this).on('click', '.gg-step5 .hoanthanh', function () {
            $('.info-pay-google').removeClass('hidden');
            $('.gg-step5').addClass('hidden');
        });

        $(this).on('click', '.createcode.google', function () {
            $('.gg-step1').removeClass('hidden');
            $('.info-pay-google').addClass('hidden');
            $('.createcode.google').addClass('hidden');
        });

        $(this).on('click', '.open-mail-box', function () {
            $('.mail-box-show-hide').toggleClass("hidden");
            return false;
        });

        $(this).on('click', '.facebook a', function () {
            $('.fb-step1').removeClass('hidden');
            $('.info-pay').addClass('hidden');
            $('.createcode.facebook').addClass('hidden');
        });
        $(this).on('click', '.fb-step1 a.create-code', function () {
            $('.fb-step2').removeClass('hidden');
            $('.fb-step1').addClass('hidden');
        });
        $(this).on('click', '.fb-step2 a.generate-conversions', function () {
            $('.fb-step3').removeClass('hidden');
            $('.fb-step2').addClass('hidden');
        });
        $(this).on('click', '.fb-step3 a.create-code', function () {
            $('.fb-step4').removeClass('hidden');
            $('.fb-step3').addClass('hidden');
            $('.createcode.facebook').removeClass('hidden');
        });

        $(this).on('click', '.bigbom a', function () {
            $('.bb-step1').removeClass('hidden');
            $('.info-pay').addClass('hidden');
            $('.createcode.bigbom').addClass('hidden');
        });
        $(this).on('click', '.bb-step1 a.create-code', function () {
            $('.bb-step2').removeClass('hidden');
            $('.bb-step1').addClass('hidden');
        });
        $(this).on('click', '.bb-step2 a.create-code', function () {
            $('.bb-step3').removeClass('hidden');
            $('.bb-step2').addClass('hidden');
            $('.createcode.bigbom').removeClass('hidden');
        });

        $(this).on('click', '.phuongthuc', function () {
            $('.pay-1').removeClass('hidden');
            $('.info-pay').addClass('hidden');
        });
        $(this).on('click', '.hopdong', function () {
            $('.pay-2').removeClass('hidden');
            $('.info-pay').addClass('hidden');
        });
        $(this).on('click', '.create-code', function () {
            $('.b2').removeClass('hidden');
            $('.b1').addClass('hidden');
        });
        //show img card
        $(document).on('focusin', '.card-input input[type="text"]', function () {
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

        $(document).on('focusout', '.card-input input[type="text"]', function () {
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

        /*
         Bang
         onload default first radio checked
         */
        $("#radio-group6-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group6-location input[type=radio]:first").attr('checked', true);

        $("#radio-group1-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group2-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group3-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group4-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group5-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group7-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group8-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group9-payment input[type=radio]:first").attr('checked', true);
        $("#radio-group10-payment input[type=radio]:first").attr('checked', true);

        $("#radio-group1-location input[type=radio]:first").attr('checked', true);
        $("#radio-group2-location input[type=radio]:first").attr('checked', true);
        $("#radio-group3-location input[type=radio]:first").attr('checked', true);
        $("#radio-group4-location input[type=radio]:first").attr('checked', true);
        $("#radio-group5-location input[type=radio]:first").attr('checked', true);
        $("#radio-group7-location input[type=radio]:first").attr('checked', true);
        $("#radio-group8-location input[type=radio]:first").attr('checked', true);
        $("#radio-group9-location input[type=radio]:first").attr('checked', true);
        $("#radio-group10-location input[type=radio]:first").attr('checked', true);

        $("#payment-type input[type=radio]:first").attr('checked', true);


        /* =================================
         === Display colume             ====
         =================================== */
        // default checked
        $('.showdata input[type="checkbox"]').each(function () {
            this.checked = true;
        });

        /* =================================
         === slide ADs nhiều hình ảnh   ====
         =================================== */
        myOwlCarousel('.loop');

        /* =================================
         === Edit                  ====
         =================================== */
        if ($('.data-table').length) {
            $.fn.editable.defaults.mode = 'inline';
        }

        var $chk = $(".targeting-sfelect input:checkbox");
        var $tbl = $("#tableheadfixer");
        $chk.prop('checked', true);
        $chk.click(function () {
            var colToHide = $tbl.find("." + $(this).attr("value"));
            $(colToHide).toggle();
        });

        /* =================================
         === Show info                  ====
         =================================== */
        $('.infoa').click(function () {
            $('.info').slideToggle("fast");
        });


        /* =================================
         === tooltip                  ====
         =================================== */
        $('[data-role="popover"]').popover({
            trigger: 'click'
        });


        /* =================================
         === check show buy             ====
         =================================== */
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

        // This triggers after each slide change
        $('.carousel').on('slid.bs.carousel', function () {
            var carouselData = $(this).data('bs.carousel');
            var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
            var total = carouselData.$items.length;

            // Now display this wherever you want
            var text = (currentIndex + 1) + "/" + total;
            $('#carousel-index').text(text);
        });

        // This triggers after each slide change
        $('#carousel-example-generic2').on('slid.bs.carousel', function () {
            var carouselData = $(this).data('bs.carousel');
            var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
            var total = carouselData.$items.length;

            // Now display this wherever you want
            var text = (currentIndex + 1) + "/" + total;
            $('#carousel-index2').text(text);
        });

        // This triggers after each slide change
        $('.modal-code .carousel').on('slid.bs.carousel', function () {
            var carouselData = $(this).data('bs.carousel');
            var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
            var total = carouselData.$items.length;

            // Now display this wherever you want
            var text = (currentIndex + 1) + "/" + total;
            $(this).find('.carousel-index').text(text);
        });

        //tag input send mail
        if ($('.sendmail').length) {
            $('.sendmail').inputTags();
        }


        $('.carousel').carousel({
            interval: false
        });


        $(this).on('click', '.datgiatri', function () {
            if (this.checked) {
                $(".fb-step2").find('.value').removeClass('hidden');
            } else {
                $(".fb-step2").find('.value').addClass('hidden');
            }
        });

        //add tuy chinh url
        $(this).on("click", ".button-add", function () {
            $('.wrap-custom-url:first').clone().find("input:text").val("").end().insertAfter(".wrap-custom-url:last");
        });

        //add URL
        $(this).on("click", ".adds", function () {
            $('.row1:first').clone().find("input:text").val("").end().insertAfter(".row1:last");
        });

        //add flag select option
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
            $parent.parent().find('.trigger.selected').html($selectedEl.find('label').html());
            $('.select-payment').removeClass('hidden');

            $('#default-visa').removeClass('hidden'); //
        });

        //select app
        $('#source-select').fancySelect().on('change.fs', function (e) {
            var $parent = $(this).parent();
            var $appSelect = $('#app-select');
            var $selectedEl = $parent.find('.options').find('.selected');
            var val = $selectedEl ? $selectedEl.data('raw-value') : null;
            if (val) {
                if (val == 'app') {
                    $appSelect.removeClass('hidden');
                } else {
                    $appSelect.addClass('hidden');
                }
            }
        });

        $(this).on('click', '#payment-type input[type="radio"]', function () {
            if (this.checked) {
                $('.pay-show-content .check').addClass('hidden');
                $('.pay-show-content .' + $(this).attr('id')).removeClass('hidden');
            }
        });


        /* =================================
         ===  Refferal Link                 ====
         =================================== */
        $(this).on('click', '.main-nav .refferal-link', function () {
            if ($('.refferal-box').hasClass('open')) {
                $('.refferal-box').removeClass('open');
            } else {
                $('.refferal-box').addClass('open');
            }
        });
        $(document).on('mouseup', '.main', function (event) {
            if (!$('.refferal-box').is(event.target) && $('.refferal-box').has(event.target).length === 0) {
                $('.refferal-box').removeClass('open');
            }
        });


        /* =================================
         ===  Promotion Link                 ====
         =================================== */
        $(this).on('click', '.main-nav .promotion-link', function () {
            if ($('.promotion-box').hasClass('open')) {
                $('.promotion-box').removeClass('open');
            } else {
                $('.promotion-box').addClass('open');
            }
        });
        $(document).on('mouseup', '.main', function (event) {
            if (!$('.promotion-box').is(event.target) && $('.promotion-box').has(event.target).length === 0) {
                $('.promotion-box').removeClass('open');
            }
        });


        /* =================================
         ===  Notification Permutation                 ====
         =================================== */
        $(this).on('click', '.notification-permutation-modal .show-per-ads', function () {
            if ($('.notification-permutation-modal .list-per-ads').hasClass('hidden')) {
                $('.notification-permutation-modal .list-per-ads').removeClass('hidden');
                myScrollbar2('.notification-permutation-modal .list-per-ads');
            } else {
                $('.notification-permutation-modal .list-per-ads').addClass('hidden');
            }
            return false;
        });


        /* =================================
         ===  Save Object                 ====
         =================================== */
        $(this).on('click', '.wrap-create-ads #save-obj-chk', function () {
            if (this.checked) {
                $('.save-obj-input').removeClass('hidden');
            } else {
                $('.save-obj-input').addClass('hidden');
            }
        });


        /* =================================
         ===  List Campaign                 ====
         =================================== */
        openEditCell();
        closeEditCell();
        openEditDetails();
        closeEditDetails();
        openSectionInDetails();
        closeSectionInDetails();

        $(this).on('click', '.list-campaign .check-icon, .list-campaign .warning-icon', function () {
            var this_status = $(this).next();
            if (this_status.hasClass('status-campaign')) {
                $('.status-campaign').removeClass('open');
                var table = $('.wrap-bb-table');
                if (this_status.offset().top + this_status.height() + 20 > table.offset().top + table.height()) {
                    this_status.addClass('overflowing');
                }
                this_status.addClass('open');
            }
        });
        $(this).on('click', '.list-campaign .status-campaign .close-icon', function () {
            $('.status-campaign').removeClass('open');
            setTimeout(function () {
                $('.status-campaign').removeClass('overflowing');
            }, 300);
        });
        $(this).on('mouseup', 'body', function (event) {
            if (!$('.status-campaign').is(event.target) && $('.status-campaign').has(event.target).length === 0 && !$('.list-campaign .check-icon i').is(event.target) && !$('.list-campaign .warning-icon i').is(event.target)) {
                $('.status-campaign').removeClass('open');
                setTimeout(function () {
                    $('.status-campaign').removeClass('overflowing');
                }, 300);
            }
        });


        /* =================================
         ===  Trigger Enter                 ====
         =================================== */
        $(this).on('keyup', function (e) {
            if (e.keyCode === 13) {
                $('[accesskey="enter"]:visible').trigger('click');
            }
        });


    });

})(window.jQuery);