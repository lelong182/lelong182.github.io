browserValid();
(function ($) {

    "use strict";

    window.loading_screen = window.pleaseWait({
        logo: params.assetURL + "/images/logo.png",
        backgroundColor: '#34a853',
        loadingHtml: '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>'
    });

    $(window).on('load', function () {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
        $('.pg-loading-screen').css('z-index', '99999999');
        // if ($('.tutorial-modal').length) {
        //     setTimeout(function () {
        //         myModal('.tutorial-modal', 'show');
        //     }, 2000);
        // }
    });

    $(document).ready(function () {

        if (adblock) {
            alert('Vui lòng tắt Adblock để sử dụng đầy đủ tính năng trên website.');
            addErrorMessage('Vui lòng tắt Adblock để sử dụng đầy đủ tính năng trên website.');
        }

        moment.locale('vi');

        /* =================================
         ===  Convert SVG image to inline SVG                 ====
         =================================== */
        convertSvgImageToInlineSvg();


        /* =================================
         ===  Topbar                 ====
         =================================== */
        topBarScripts();


        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        myScrollbar2([
            '.list-multi-level.has-scroll'
        ], {
            suppressScrollX: true
        });
        myScrollbar2([
            '.preview-ads-content .tab-content .tab-pane',
            '.preview-ads-content .preview-inner',
            '.create-ads-content .list-ads',
            '.create-ads-content .create-ads-input',
            '.create-ads-content .list-inputed',
            '.file-manager .list-items',
            '.floating-area .main-floating',
            '.wrap-tabs-location .tab-content .tab-pane',
            '.group-title-modal .list-group-title'
        ]);
        myScrollbar([
            '.preview-ads-content .wrap-preview-tabs',
            '.preview-ads-footer'
        ], {
            axis: "x",
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
        myScrollbar2([
            '.main-content .selected-box'
        ]);


        /* ================================
         ===  Copy Clipboard                 ====
         =================================== */
        myCopyClipboard('.copy-btn', 'Sao chép thành công.');


        /* =================================
         ===  Carousel                 ====
         =================================== */
        myCarousel([
            '#carousel-1',
            '#carousel-2',
            '#carousel-3',
            '#carousel-4',
            '#carousel-5',
            '#carousel-6',
            '#carousel-preview-1',
            '#carousel-preview-2',
            '#carousel-preview-3',
            '#carousel-preview-4'
        ]);


        /* =================================
         ===  Number Format                 ====
         =================================== */
        numberFormat('.budget-format', '000.000.000.000.000', 100000);


        /* =================================
         ===  Create Ads                 ====
         =================================== */
        $(this).on('click', '.wrap-age-range .add-age-range', function () {
            var rs = $(this).parent().clone();
            rs.find('.add-age-range').removeClass('add-age-range').addClass('remove-age-range').text('Xóa độ tuổi');
            rs.find('.fancy-select .trigger').detach();
            rs.find('.fancy-select .options').detach();
            rs.find('.custom-select').removeAttr('style').removeClass('fancified').unwrap('.fancy-select').fancySelect();
            $(this).parent().before(rs);
            return false;
        });
        $(this).on('click', '.wrap-age-range .remove-age-range', function () {
            $(this).parent().remove();
            return false;
        });
        $(this).on('click', '.connect-section input[type="radio"]', function () {
            var connect_type = $(this).attr('id');
            if (this.checked) {
                if (connect_type === 'enhance-connect') {
                    $('.connect-section [data-type]').removeClass('hidden');
                } else {
                    $('.connect-section [data-type]').addClass('hidden');
                    $('.connect-section [data-type="' + connect_type + '"]').removeClass('hidden');
                }
            }
        });


        /* =================================
         ===  Multi Item Preview                 ====
         =================================== */
        multiItemPreview();


        /* =================================
         ===  Preview Box                 ====
         =================================== */
        previewBoxScripts();


        /* =================================
         === Post Available                 ====
         =================================== */
        $(this).on('click', '.wrap-post-available .current', function () {
            if ($(this).hasClass('active')) {
                $('.wrap-post-available .list-post').removeClass('open');
                $(this).removeClass('active');
            } else {
                $('.wrap-post-available .list-post').addClass('open');
                $(this).addClass('active');
            }
        });
        $(document).on('mouseup', '.wrapper', function (e) {
            var container = $('.wrap-post-available .list-post');
            if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.wrap-post-available .current').is(e.target)) {
                $('.wrap-post-available .list-post').removeClass('open');
                $('.wrap-post-available .current').removeClass('active');
            }
        });
        $(this).on('click', '.wrap-post-available .list-post li', function () {
            var title = $(this).find('h4').text();
            $('.wrap-post-available .list-post li').removeClass('active');
            $(this).addClass('active');
            $('.wrap-post-available .current').text(title).removeClass('active');
            $('.wrap-post-available .list-post').removeClass('open');
        });


        /* ================================
         ===  Custom Select                 ====
         =================================== */
        mySelect2('.custom-select', {
            minimumResultsForSearch: Infinity
        });
        mySelect2('.custom-select.has-search', {
            minimumResultsForSearch: false
        });
        myFancySelect('.targeting-select', {
            optionsClass: 'has-label',
            onlyCloseOutside: true,
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                return "<input type='checkbox' id='targeting-" + val + "' class='css-checkbox-2' /><label for='targeting-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
            }
        });
        myFancySelect('.tracking-content-select', {
            optionsClass: 'has-label',
            holdPlaceholder: true,
            onlyCloseOutside: true,
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                return "<input type='checkbox' id='tracking-content-" + val + "' class='css-checkbox-2' /><label for='tracking-content-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
            }
        });
        myFancySelect('.narrowing-targets-select', {
            optionsClass: 'has-label',
            onlyCloseOutside: true,
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                return "<input type='checkbox' id='narrowing-targets-" + val + "' class='css-checkbox-2' /><label for='narrowing-targets-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
            }
        });
        myFancySelect('.connect-select', {
            optionsClass: 'has-label',
            onlyCloseOutside: true,
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                return "<input type='checkbox' id='connect-" + val + "' class='css-checkbox-2' /><label for='connect-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
            }
        });
        // mySelect2('.connect-select', {
        //     allowClear: true,
        //     closeOnSelect: false,
        //     templateResult: function (state) {
        //         if (!state.id) {
        //             return state.text;
        //         }
        //         var $state = $(
        //             '<input type="checkbox" id="connect-' + state.element.value + '" class="css-checkbox-2" /><label for="connect-' + state.element.value + '" class="css-label-2">' + state.text + '</label>'
        //         );
        //         return $state;
        //     }
        // });
        myFancySelect('.channels-mobile-select', {
            optionsClass: 'has-label',
            holdPlaceholder: true,
            onlyCloseOutside: true,
            optionTemplate: function (optionEl) {
                var val = optionEl.val();
                return "<input type='checkbox' id='channels-mobile-chk-" + val + "' class='css-checkbox-2' /><label for='channels-mobile-chk-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
            }
        });
        $('.foot-main-content .create-new-select').fancySelect().on('change.fs', function () {
            var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
            window.location.href = raw_val;
        });


        /* =================================
         ===  Date View                 ====
         =================================== */
        myDateView();
        renderDateViewPicker('.date-view-picker', function (data) {
            console.log(data);
        });
        // setCustomRanges('.date-view-picker', new Date('2016-08-20'),  new Date('2016-08-25'));


        /* =================================
         ===  Statistic                 ====
         =================================== */
        $(this).on('mouseenter', '.top-statistic .wrap-campaign-selection', function () {
            var this_li = $(this);
            $('.top-statistic .sub-menu').removeClass('open');
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
            } else {
                $("[class$='-view-picker']").daterangepicker('close');
                if (Modernizr.mq('(max-width: 857px)')) {
                    if ($('.top-statistic .campaign-content .content-slick').hasClass('slick-slider')) {
                        $('.top-statistic .campaign-content .content-slick').slick('unslick');
                    }
                    $('.top-statistic .campaign-content .content-slick').slick({
                        infinite: true,
                        fade: true,
                        cssEase: 'linear'
                    });
                }
                $('.top-statistic .has-sub .right-text a').removeClass('opened');
                $(this).addClass('opened');
                this_li.find('.sub-menu').addClass('open');
            }
        });
        if ($('.wrap-statistic.demo').length) {
            renderChart();
            $('.cr-details-select').fancySelect().on('change.fs', function () {
                var raw_val = $(this).parent().find('.options').find('.selected').attr('data-raw-value');
                if (raw_val == 1) {
                    $('.wrap-cr-details-chart-1').removeClass('hidden');
                    $('.wrap-cr-details-chart-2').addClass('hidden');
                } else {
                    $('.wrap-cr-details-chart-2').removeClass('hidden');
                    $('.wrap-cr-details-chart-1').addClass('hidden');
                }
            });
            renderTableColor({
                2: [5, 10, 15, 8, 8, 12, 12, 8, 10, 14, 11, 12, 5, 10, 20, 5, 13, 14, 13, 5, 17, 18, 10, 10],
                3: [15, 9, 15, 8, 8, 12, 12, 20, 14, 9, 6, 8, 5, 10, 12, 24, 13, 14, 23, 24, 17, 8, 20, 14],
                4: [5, 12, 15, 8, 8, 22, 12, 12, 14, 24, 11, 9, 5, 12, 12, 5, 13, 9, 23, 24, 7, 18, 11, 17],
                5: [4, 7, 22, 18, 12, 28, 15, 33, 15, 20, 24, 20, 10, 5, 6, 7, 9, 2, 14, 5, 6, 29, 14, 10],
                6: [9, 10, 15, 8, 8, 22, 18, 22, 11, 24, 19, 18, 9, 8, 12, 22, 13, 4, 19, 14, 7, 8, 15, 14],
                7: [13, 21, 15, 8, 8, 5, 12, 15, 14, 21, 23, 13, 25, 10, 27, 5, 3, 14, 23, 5, 7, 8, 20, 19],
                8: [5, 20, 20, 5, 15, 18, 17, 19, 25, 4, 20, 12, 5, 16, 12, 22, 13, 14, 23, 5, 17, 15, 25, 14]
            });
        }


        /* =================================
         ===  Complete Create Campaign                 ====
         =================================== */
        completePage();


        /* =================================
         ===  Create Ads                 ====
         =================================== */
        $(this).on('click', '.create-ads-input .save-ads', function () {
            var top_folder = $('.list-ads .ads-item.folder').first().position().top + 230;
            $('.folder-notification-box').removeClass('hidden');
            $('.wrapper').prepend('<div class="permutation-overlay"></div>');
            $('.permutation-overlay').velocity({
                opacity: 1
            }, {
                duration: 300,
                delay: 100
            });
            $('.folder-notification-box').velocity({
                top: top_folder
            }).velocity({
                opacity: 1,
                top: '-=100',
                left: '-=100'
            }, {
                duration: 500
            });
            return false;
        });
        clickOutSide('.folder-notification-box', function () {
            if ($('.permutation-overlay').length) {
                $('.folder-notification-box').velocity({
                    opacity: 0,
                    top: '+=100',
                    left: '+=100'
                }, {
                    complete: function (elements) {
                        $('.folder-notification-box').addClass('hidden');
                    }
                });
                $('.permutation-overlay').velocity({
                    opacity: 0
                }, {
                    duration: 300,
                    complete: function (elements) {
                        $('.permutation-overlay').remove();
                    }
                });
            }
        });
        $(this).on('click', '.create-ads-input .update-ads', function () {
            myModal('.notification-permutation-modal', {
                show: true,
                backdrop: 'static',
                keyboard: false
            });
            return false;
        });


        /* =================================
         ===  Bigbom Table                 ====
         =================================== */
        tableScripts();
        collapseTable();
        collapseTable(true);
        cellDetails();

        var toggle_column_arr_test = [{
            value: 10,
            name: 'Cost',
            status: 'checked'
        }, {
            value: 11,
            name: 'Impression',
            status: 'checked'
        }, {
            value: 12,
            name: 'Clicks',
            status: 'checked'
        }, {
            value: 13,
            name: 'CTR',
            status: 'checked'
        }, {
            value: 14,
            name: 'Action',
            status: 'checked'
        }, {
            value: 15,
            name: 'CR',
            status: 'checked'
        }, {
            value: 16,
            name: 'CPC',
            status: 'checked'
        }, {
            value: 17,
            name: 'CPA',
            status: 'checked'
        }];
        renderToggleColumnSelection(toggle_column_arr_test);
        $(this).on('click', '.wrap-toggle-column .fancy-select .action-btn', function () {
            toggleColumnTable(true);
        });
        $('.facebook-linking-modal').on('shown.bs.modal', function () {
            responsiveTableWidth(true, '.facebook-linking-table');
            checkboxTable();
            console.log($('.facebook-linking-table').parent().width() - 1);
        });
        $('.wrap-account-linking .nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function () {
            responsiveTableWidth(true, '.account-linking-table');
        });
        myScrollbar2('.linking-modal .modal-body');
        $(this).on('click', '.list-campaign .config-bidding-icon', function () {
            var this_cell = $(this).closest('.bb-table-cell');
            var enable_cpc = this_cell.find('.enable-cpc').data('val');
            var keep_running = this_cell.find('.keep-running').data('val');
            $('.config-bidding-modal #config-bidding-cpa-input').val(this_cell.find('.cpa').data('val'));
            if (enable_cpc) {
                $('.config-bidding-modal .manual-bidding-content').removeClass('hidden');
                $('.config-bidding-modal #manual-bidding').prop('checked', true);
                $('.config-bidding-modal #config-bidding-cpc-input').val(this_cell.find('.cpc').data('val'));
            } else {
                $('.config-bidding-modal .manual-bidding-content').addClass('hidden');
                $('.config-bidding-modal #auto-bidding').prop('checked', true);
                $('.config-bidding-modal #config-bidding-cpc-input').val('');
            }
            if (keep_running) {
                $('.config-bidding-modal #keep-running-chk').prop('checked', true);
            } else {
                $('.config-bidding-modal #keep-running-chk').prop('checked', false);
            }
            myModal('.config-bidding-modal');
        });

        /* =================================
         ===  Cr Code Page                 ====
         =================================== */
        $(this).on('click', '#create-code-facebook', function () {
            $('.wrap-facebook-main').addClass('hidden');
            $('.wrap-cr-facebook').removeClass('hidden');
        });

        $(this).on('click', '#save-facebook', function () {
            $('.wrap-cr-facebook').addClass('hidden');
            $('.wrap-code-facebook').removeClass('hidden');
        });

        $(this).on('click', '#create-code-bigbom', function () {
            $('.wrap-bigbom-main').addClass('hidden');
            $('.wrap-cr-bigbom').removeClass('hidden');
        });


        $(this).on('click', '.show-popup', function () {
            $(".wr-popup").css({
                transform: 'translateX(0)'
            });
            $("footer.footer").after('<div class="br-popup"></div>');
        });

        $(this).on('click', '.wr-popup-header .close', function () {
            $(".wr-popup").css({
                transform: 'translateX(-200%)'
            });
            $("div").remove('.br-popup');
        });

        $(this).on('click', '.face-modal1 .next-right', function () {

        });
        $(this).on('click', '.face-modal2 .next-left', function () {

        });

        $(this).on('click', '.bb-modal1 .next-right', function () {
            $(".wr-popup2").removeClass('hidden');
            $(".wr-popup1").addClass('hidden');
        });
        $(this).on('click', '.bb-modal2 .next-left', function () {
            $(".wr-popup1").removeClass('hidden');
            $(".wr-popup2").addClass('hidden');
        });

        $(this).on('change', '#select-bigbom', function () {
            var selectedVal = $(this).find("option:selected").val();
            if (selectedVal == 1) {
                $('#tracking-bigbom-input').removeClass('hidden');
            } else {
                $('#tracking-bigbom-input').addClass('hidden');
            }
        });

        $(this).on('change', '#select-facebook', function () {
            var selectedVal = $(this).find("option:selected").val();
            if (selectedVal == 1) {
                $('.wr-url-same').removeClass('hidden');
                $('.wr-url-have').addClass('hidden');
            } else {
                $('.wr-url-same').addClass('hidden');
                $('.wr-url-have').removeClass('hidden');
            }
        });

        $('.face-code').val("<!-- Facebook Pixel Code --> \n <script>\n  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','//connect.facebook.net/en_US/fbevents.js');  \n \n fbq('init', '756059327855895'); fbq('track', \"PageView\");</script> <noscript><img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=756059327855895&ev=PageView&noscript=1\" /></noscript> <!-- End Facebook Pixel Code -->");

        $('.code-box1').val("<!-- For all pages -->\n <script> window.btm=window.btm||function(){(btm.q=btm.q||[]).push(arguments)};btm.l=+new Date; btm('create', 'BB-18862380-5'); btm('send', 'pageview'); </script>\n <script async src='//test-track.adtopgo.com/bb.js'></script> \n<noscript><img src='//test-track.adtopgo.com/t.gif?id=BB-18862380-5&type=pageview' /></noscript>");
        $('.code-box2').val("<!-- On page want to track Action -->\n <script> btm('track', 'ViewContent'); </script>\n <noscript><img src='//test-track.adtopgo.com/t.gif?id=BB-18862380-5&ev=ViewContent' /></noscript>");

        /* =================================
         ===  introjs               ====
         =================================== */

        $(window).on('load', function () {
            var introJsStarted = introJs().start();
            // hiding modal on 'oncomplete' and 'exit' events
            introJsStarted
                .oncomplete(function () {
                    $('.coccoc-linking-modal').hide();
                    //   $('.wrap-create-ads .main-tabs li a[href="#create-ads"]').trigger('click');
                    // $('.create-ads-section').hide();
                }).onexit(function () {
                $('.coccoc-linking-modal').hide();
                //  $('.wrap-create-ads .main-tabs li a[href="#create-ads"]').trigger('click');
                // $('.create-ads-section').hide();
            }).onchange(function (targetElement) {
                if ($(targetElement).attr("data-step") == 2) {
                    $('#person .person-menu').addClass('active');
                    $('#person .person-actions').addClass('open');
                    $("#business-location-chk").prop("checked", true);
                    $('.business-location').show();
                }
                // don't forget to hide modal on other steps
                if ($(targetElement).attr("data-step") < 2) {
                    $('#person .person-menu').removeClass('active');
                    $('#person .person-actions').removeClass('open');
                    $("#business-location-chk").prop("checked", false);
                    $('.business-location').hide();
                }
                // and show modal on Step 4
                if ($(targetElement).attr("data-step") == 3) {
                    // $('.wrap-create-ads .main-tabs li a[href="#create-ads"]').trigger('click');
                    // $('li:nth-child(2)')
                    $('.coccoc-linking-modal').show();

                }
                // don't forget to hide modal on other steps
                if ($(targetElement).attr("data-step") < 3) {
                    $('.coccoc-linking-modal').hide();
                    // $("#coccoc-search .wrap-create-ads .main-tabs li:eq(0)").addClass('active')
                    // $("#coccoc-search .wrap-create-ads .main-tabs li:eq(1)").removeClass('active')
                    // $('#coccoc-search #object').addClass('in active');
                    // $('#coccoc-search #create-ads').removeClass('in active');
                }
                // and show modal on Step 4
                if ($(targetElement).attr("data-step") == 4) {
                    $(".wrap-create-ads .main-tabs li:eq(0)").removeClass('active')
                    $(".wrap-create-ads .main-tabs li:eq(1)").addClass('active')
                    $('#object').removeClass('in active');
                    $('#create-ads').addClass('in active');
                    // $("#coccoc-newtab .wrap-create-ads .main-tabs li:eq(0)").removeClass('active')
                    // $("#coccoc-newtab .wrap-create-ads .main-tabs li:eq(1)").addClass('active')
                    // $('#coccoc-newtab #object').removeClass('in active');
                    // $('#coccoc-newtab #create-ads').addClass('in active');
                }
                // don't forget to hide modal on other steps
                if ($(targetElement).attr("data-step") < 4) {
                    $(".wrap-create-ads .main-tabs li:eq(0)").addClass('active')
                    $(".wrap-create-ads .main-tabs li:eq(1)").removeClass('active')
                    $('#object').addClass('in active');
                    $('#create-ads').removeClass('in active');
                }

            });
        });

        // $('.ads-common').animate({ scrollTop: 300 });
        // $(".ads-common").animate({ scrollTop: $(".ads-common")[0].scrollHeight }, 1000);
    });

})(window.jQuery);