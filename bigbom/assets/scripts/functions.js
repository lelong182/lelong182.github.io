(function($) {

    "use strict";

    $.fn.adtop_animation = function(effect, callback) {
        this.addClass(effect + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass(effect + ' animated');
            if (typeof callback === 'function') {
                callback.call(this);
            }
        });
    };

    $(document).ready(function() {  

        /* =================================
         ===  Fancy Box                 ====
         =================================== */
        if ($('.fancybox').length) {
            $(".fancybox").fancybox({
                padding: 0,
                helpers: {
                    overlay: {
                        css: {
                            'background': 'rgba(0, 0, 0, 0.85)'
                        }
                    }
                }
            });
        }


        /* =================================
         ===  Dropdown Fade                 ====
         =================================== */
        $('.dropdown').on('show.bs.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
        });
        $('.dropdown').on('hide.bs.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
        });


        /* =================================
         ===  Tooltip                 ====
         =================================== */
        if ($('[data-toggle="tooltip"]').length) {
            $('[data-toggle="tooltip"]').tooltip({
                container: 'body'
            });
        }


        /* ================================
         ===  Custom Select                 ====
         =================================== */
        if ($('.custom-select-search').length) {
            $('.custom-select-search').select2({
                width: '100%',
                language: 'vi'
            });
            $('.custom-select-search+.select2-container .select2-selection__arrow').html('');
        }
        if ($('.custom-select').length) {
            $('.custom-select').fancySelect();
        }
        if ($('.custom-select-icon').length) {
            $('.custom-select-icon').fancySelect({
                optionTemplate: function(optionEl) {
                    return '<span class="select-icon"><img src="' + optionEl.data('icon') + '" alt="img" /></span>' + optionEl.text();
                }
            });
        }
        if ($('.pixel-select').length) {
            $('.pixel-select').fancySelect({
                optionsClass: 'has-sub',
                optionTemplate: function(optionEl) {
                    var status_class = "";
                    if (optionEl.data('status') == 1) {
                        status_class = "enable";
                    } else {
                        status_class = "disable";
                    }
                    var html = "<div class='wrap-content " + status_class + "'>";
                    html += optionEl.data('text');
                    html += "<div class='hover-content'>" + optionEl.data('hover') + "</div>";
                    html += "</div>";
                    return html;
                }
            });
        }
        if ($('.connect-select').length) {
            $('.connect-select').fancySelect({
                optionsClass: 'has-sub',
                optionTemplate: function(optionEl) {
                    var list = optionEl.data('list').split(',');
                    var html = "<div class='wrap-connect-list'>";
                    html += optionEl.text();
                    html += "<ul data-type='" + optionEl.data('type') + "'>";
                    $.each(list, function(i, val) {
                        var arr = val.split('--');
                        html += "<li data-id='" + arr[1] + "'>" + arr[0] + "</li>";
                    });
                    html += "</ul>";
                    html += "</div>";
                    return html;
                }
            });
        }

        /* =================================
         ===  StickyJS                 ====
         =================================== */
        $(".res-table .toolbar .toolbar-inner").sticky({
            topSpacing: 0
        });
        $(".res-table .wrap-thead").sticky({
            topSpacing: 0
        });
        $(".main-content .selected-box").sticky({
            topSpacing: 0
        });


        /* =================================
        ===  Date View                 ====
        =================================== */
        if ($('.wrap-daterange').length) {
            $(".wrap-daterange .start-date").datepicker({
                defaultDate: "today",
                changeMonth: true,
                onClose: function(selectedDate) {
                    $(".wrap-daterange .end-date").datepicker("option", "minDate", selectedDate);
                }
            });
            $(".wrap-daterange .end-date").datepicker({
                defaultDate: "today",
                changeMonth: true,
                onClose: function(selectedDate) {
                    $(".wrap-daterange .start-date").datepicker("option", "maxDate", selectedDate);
                }
            });
            $(".wrap-daterange .glyphicon-calendar").click(function() {
                $(this).prev().datepicker("show");
            });
        }


        if ($('.res-table').length) {
            fixed_scrollbar();
            $(window).scroll(function() {
                fixed_scrollbar(true);
            });
            $(window).resize(function() {
                fixed_scrollbar(true);
            });
        }
        /* =================================
         ===  Ads Target                 ====
         =================================== */
        $('.form-target').on({
            mouseover: function() {
                $(this).find('.hover-content').addClass('visible');
            },
            mouseleave: function() {
                $(this).find('.hover-content').removeClass('visible');
            }
        }, '.fancy-select li');


        /* =================================
         ===  Count Character                 ====
         =================================== */
        if ($('.has-count').length) {
            $(window).on('load', function() {
                $('.has-count').each(function() {
                    var text_max = $(this).find('input[type="text"]').attr('maxlength');
                    var text_length = $(this).find('input[type="text"]').val().length;
                    var text_remaining = text_max - text_length;
                    $(this).find('.count-desc').html(text_remaining + ' ký tự');
                });
            });
            $('.has-count').on('keyup', 'input[type="text"]', function() {
                var text_max = $(this).attr('maxlength');
                var text_length = $(this).val().length;
                var text_remaining = text_max - text_length;
                $(this).parent().find('.count-desc').html(text_remaining + ' ký tự');
            });
        }

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
         ===  Minimal Menu                 ====
         =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');


        /* =================================
         ===  Checkall                 ====
         =================================== */
        $(this).on('click', '.res-table #checkbox-all', function(event) {
            if (this.checked) {
                $('.res-table .toolbar').show();
                $('.res-table td .css-checkbox').each(function() {
                    this.checked = true;
                });
            } else {
                $('.res-table .toolbar').hide();
                $('.res-table td .css-checkbox').each(function() {
                    this.checked = false;
                });
            }
        });


        /* =================================
         ===  Table Checkbox                 ====
         =================================== */
        $(this).on('click', '.res-table td .css-checkbox', function() {
            if (this.checked) {
                $(this).closest('tr').addClass("flash_current")
                    .delay(2000)
                    .queue(function() {
                        $(this).removeClass("flash_current");
                        $(this).dequeue();
                    });
                if ($('.res-table .toolbar').is(":hidden") || $('.res-table td .css-checkbox:checked').length < 2) {
                    $('.res-table .toolbar').show();
                    $(".res-table .toolbar .toolbar-inner").sticky('update');
                }
                if ($(this).closest('tr').hasClass('group-child')) {
                    var group_parent_id = $(this).closest('tr').data('group-id');
                    if ($('.group-child[data-group-id="' + group_parent_id + '"] .css-checkbox:checked').length === ($('.group-child[data-group-id="' + group_parent_id + '"]').length)) {
                        $('.group-parent[data-group-id="' + group_parent_id + '"] .css-checkbox').prop('checked', true);
                    }
                }
            } else {
                if ($(this).closest('tr').hasClass('group-child')) {
                    var group_parent_id = $(this).closest('tr').data('group-id');
                    $('.group-parent[data-group-id="' + group_parent_id + '"] .css-checkbox').prop('checked', false);
                }
                if ($('.res-table .toolbar').is(":visible") && $('.res-table td .css-checkbox:checked').length === 0) {
                    $('.res-table .toolbar').hide();
                }
            }
            if ($('.res-table td .css-checkbox:checked').length === ($('.res-table tbody tr').length - 1)) {
                $('.res-table #checkbox-all').prop('checked', true);
            } else {
                $('.res-table #checkbox-all').prop('checked', false);
            }
            var checkbox_not_groupchild_checked_length = $('.res-table tr:not(.group-child) td .css-checkbox:checked').length;
            if (checkbox_not_groupchild_checked_length >= 2 && checkbox_not_groupchild_checked_length <= 3) {
                $('.res-table .toolbar .compare-link').addClass('visible');
            } else {
                $('.res-table .toolbar .compare-link').removeClass('visible');
            }
        });


        /* =================================
         ===  List multi level                 ====
         =================================== */
        $(this).on('click', '.list-multi-level .has-child .glyphicon-triangle-right', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-triangle-bottom');
            $(this).closest('.has-child').addClass('open');
        });
        $(this).on('click', '.list-multi-level .has-child .glyphicon-triangle-bottom', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-triangle-right');
            $(this).closest('.has-child').removeClass('open');
        });
        $(this).on('click', '.list-multi-level .has-child input[type="checkbox"]', function() {
            var parent_li = $(this).parent('li');
            var closest_child = $(this).closest('.has-child');
            var checkbox_all = closest_child.children('input[type="checkbox"]');
            if (this.checked) {
                if (parent_li.hasClass('has-child')) {
                    parent_li.find('input[type="checkbox"]').each(function() {
                        this.checked = true;
                    });
                }
            } else {
                if (parent_li.hasClass('has-child')) {
                    parent_li.find('input[type="checkbox"]').each(function() {
                        this.checked = false;
                    });
                }
            }
            if (closest_child.find('ul input[type="checkbox"]:checked').length === closest_child.find('li').length) {
                checkbox_all.prop('checked', true);
            } else {
                checkbox_all.prop('checked', false);
            }
        });


        /* =================================
         ===  Date View                 ====
         =================================== */
        if ($('.date-view-picker').length) {
            $(".date-view-picker").daterangepicker({
                initialText: 'Xem theo ngày',
                applyButtonText: 'Xem',
                clearButtonText: 'Xóa',
                cancelButtonText: null,
                dateFormat: 'dd/mm/yy',
                presetRanges: [{
                    text: 'Hôm nay',
                    dateStart: function() {
                        return moment()
                    },
                    dateEnd: function() {
                        return moment()
                    }
                }, {
                    text: 'Tuần này',
                    dateStart: function() {
                        return moment().startOf('isoweek')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'days')
                    }
                }, {
                    text: 'Tháng này',
                    dateStart: function() {
                        return moment().startOf('month')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'days')
                    }
                }, {
                    text: '7 ngày trước',
                    dateStart: function() {
                        return moment().subtract(7, 'days')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'days')
                    }
                }, {
                    text: 'Hôm qua',
                    dateStart: function() {
                        return moment().subtract(1, 'days')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'days')
                    }
                }, {
                    text: 'Tuần trước',
                    dateStart: function() {
                        return moment().subtract(1, 'weeks').startOf("isoweek")
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'weeks').endOf("isoweek")
                    }
                }, {
                    text: 'Tháng trước',
                    dateStart: function() {
                        return moment().subtract(1, 'months').startOf('month')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'months').endOf('month')
                    }
                }, {
                    text: '30 ngày trước',
                    dateStart: function() {
                        return moment().subtract(30, 'days')
                    },
                    dateEnd: function() {
                        return moment().subtract(1, 'days')
                    }
                }],
                applyOnMenuSelect: false,
                datepickerOptions: {
                    minDate: null,
                    maxDate: null,
                    numberOfMonths: 2,
                    showCurrentAtPos: 1,
                    onSelect: function(dateText, datePicker) {
                        datePicker.drawMonth += 1;
                    }
                },
                onSubmit: function() {
                    console.log($('.date-view-picker').val());
                }
            });
        }


        /* =================================
         ===  Table Group                 ====
         =================================== */
        $(this).on('click', '.res-table .group-parent .glyphicon-plus-sign', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-minus-sign');
            var group_parent = $(this).closest('.group-parent');
            var group_parent_id = group_parent.data('group-id');
            group_parent.addClass('open');
            $('.group-child[data-group-id="' + group_parent_id + '"]').each(function(i) {
                $(this).addClass('visible');
            });
            fixed_scrollbar();
        });
        $(this).on('click', '.res-table .group-parent .glyphicon-minus-sign', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-plus-sign');
            var group_parent = $(this).closest('.group-parent');
            var group_parent_id = group_parent.data('group-id');
            group_parent.removeClass('open');
            $('.group-child[data-group-id="' + group_parent_id + '"]').each(function(i) {
                $(this).removeClass('visible');
            });
            fixed_scrollbar();
        });
        $(this).on('click', '.res-table .group-parent .css-checkbox', function(event) {
            var group_parent = $(this).closest('.group-parent');
            var group_parent_id = group_parent.data('group-id');
            if (this.checked) {
                $('.group-child[data-group-id="' + group_parent_id + '"] .css-checkbox').each(function() {
                    this.checked = true;
                });
            } else {
                $('.group-child[data-group-id="' + group_parent_id + '"] .css-checkbox').each(function() {
                    this.checked = false;
                });
                if ($('.res-table .toolbar').is(":visible") && $('.res-table td .css-checkbox:checked').length == 0) {
                    $('.res-table .toolbar').hide();
                }
            }
        });


        /* =================================
         ===  Table Status                 ====
         =================================== */
        $(this).on('click', '.res-table .glyphicon-play', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-pause');
            $(this).closest('tr').addClass('pause');
        });
        $(this).on('click', '.res-table .glyphicon-pause', function() {
            $(this).removeClass().addClass('glyphicon glyphicon-play');
            $(this).closest('tr').removeClass('pause');
        });


        /* =================================
         ===  List Selected                 ====
         =================================== */
        $(this).on('click', '.list-selected .selected-item .close-icon', function() {
            var list_selected = $(this).closest('.list-selected');
            var list_all = list_selected.parent().children('.list-all');
            if (list_selected.find('.selected-item').length === 1) {
                list_selected.addClass('hidden');
            }
            $(this).closest('.selected-item').remove();
            list_all.find('li:contains(' + $(this).prev('h4').text() + ')').show();
        });


        /* =================================
         ===  Create Ads                 ====
         =================================== */
        $('.create-ads-content .right-content').css('height', $('.create-ads-content').height() + 1);
        $('.create-ads-content .wrap-upload input[type="file"]').change(function() {
            $('.wrap-upload').addClass('hidden');
            $('.wrap-preview').removeClass('hidden');
            initialize_owl($('.ads-banners .box-content'));
            $('.create-ads-content .wrap-preview .wrap-add-banner').css({
                width: $('.create-ads-content .wrap-preview .carousel .owl-item').width(),
            });
        });
        $(this).on('click', '.create-ads-btn', function() {
            $('.ads-banners').addClass('hidden');
            $('.ads-toolbar').removeClass('hidden');
            $('.list-created-ads').removeClass('hidden');
        });
        $('.recreate-ads-btn').click(function() {});
        $('.created-ads-inner ul').css('max-height', $('.create-ads-content').height() - 89);
        $('.list-created-ads .created-ads').click(function() {
            $('.created-ads').removeClass('active');
            $(this).addClass('active');
        });
        $('.list-created-ads .created-ads .action-label').click(function() {
            var created_ads = $(this).closest('.created-ads');
            if (created_ads.hasClass('disable')) {
                created_ads.removeClass('disable');
                $(this).find('span').text('Tắt quảng cáo');
                $(this).find('i').removeClass().addClass('glyphicon glyphicon-pause');
            } else {
                created_ads.addClass('disable');
                $(this).find('span').text('Bật quảng cáo');
                $(this).find('i').removeClass().addClass('glyphicon glyphicon-play');
            }
        });
        $(this).on('click', '.message i', function() {
            $(this).parent().adtop_animation('fadeOutUp', function() {
                $(this).hide();
            });
        });


        /* =================================
         ===  Custom Scrollbar                 ====
         =================================== */
        $(".created-ads-inner ul").mCustomScrollbar();
        $(".wrap-create-camp .list-multi-level").mCustomScrollbar();


        /* =================================
         ===  Countdown                 ====
         =================================== */
        if ($('.wrap-create-complete.active').length) {
            var count = 3;
            var counter = setInterval(function() {
                count = count - 1;
                if (count <= 0) {
                    clearInterval(counter);
                    window.location.href = $('.wrap-create-complete').data('url');
                    return;
                }
                $('.wrap-create-complete .countdown').text(count);
            }, 1000);
        }


        /* =================================
         ===  Highchart                 ====
         =================================== */
        var data1_default = [87656, 83463, 55426, 79697, 63432, 48567, 21563];
        var data2_default = [15674, 48567, 32345, 28564, 46356, 65454, 29421];
        var data11 = [27656, 73963, 48426, 66697, 53432, 38967, 19563];
        var data21 = [9674, 38567, 22045, 18364, 36356, 57454, 17421];
        var data12 = [25656, 63963, 38426, 56697, 43432, 28967, 11563];
        var data22 = [19674, 31567, 29045, 8364, 30356, 55454, 10421];
        var data13 = [37656, 73063, 28426, 36697, 73432, 28967, 9563];
        var data23 = [19674, 31567, 12045, 10364, 16356, 27454, 10421];
        var data14 = [17656, 63963, 38426, 56697, 23432, 68967, 29563];
        var data24 = [39674, 18567, 2045, 10364, 16356, 47454, 37421];
        var data3 = [8.5, 8.85, 9.2, 10.1, 10.5, 11.3, 9.5];
        var data4 = [12753, 11063, 6549, 8543, 7654, 7843, 7735];
        var two_yaxis = [{
            title: {
                text: null
            },
            opposite: true
        }, {
            title: {
                text: null
            }
        }];
        var categories_test = ["09/11", "10/11", "11/11", "12/11", "13/11", "14/11", "15/11"];
        var data_test = [{
            showInLegend: false,
            name: 'Tổng Impression',
            data: data1_default,
            color: '#39a9c1'
        }, {
            showInLegend: false,
            name: 'Tổng Impression',
            data: data2_default,
            color: '#999999'
        }];
        var data_test2 = [{
            colorByPoint: true,
            data: [{
                name: 'Nhóm Ngạo Thiên HCM',
                y: 89.96,
                color: '#253B94'
            }, {
                name: 'Nhóm Ngạo Thiên HN',
                y: 10.04,
                color: '#FCA600'
            }]
        }];
        myHighChartsCheckbox('input[id$="checkbox-1"]', [data1_default, data2_default], [data11, data21]);
        myHighChartsCheckbox('input[id$="checkbox-2"]', [data1_default, data2_default], [data12, data22]);
        myHighChartsCheckbox('input[id$="checkbox-3"]', [data1_default, data2_default], [data13, data23]);
        myHighChartsCheckbox('input[id$="checkbox-4"]', [data1_default, data2_default], [data14, data24]);
        $(this).on('click', '.wrap-create-ads .report-link', function() {
            $('.ads-report').removeClass('hidden');
            $('.report-tabs').responsiveTabs({
                activate: function(event, tab) {
                    myLineCharts($('.' + $(tab.selector).data('chart')), categories_test, data_test);
                }
            });
            $(".wrap-create-ads .list-created-ads .created-ads-inner").sticky({
                topSpacing: 30
            });
        });


        /* =================================
        ===  Statistic Pie Chart                 ====
        =================================== */
        if ($('.wrap-statistic').length) {
            var data_chart_1 = [{
                colorByPoint: true,
                data: [{
                    name: 'Jockey Vietnam - November HCM',
                    y: 69.99,
                    color: '#253B94'
                }, {
                    name: 'Jockey Vietnam - November HN',
                    y: 30.01,
                    color: '#FCA600'
                }]
            }];
            myPieCharts('.chart-1', data_chart_1);

            data_test[0]['data'] = [208827, 321082, 190276, 155123, 278827, 272009, 219832];
            data_test[1]['data'] = [200827, 221082, 110276, 125123, 218827, 172009, 289832];
            myLineCharts($('.chart-2'), categories_test, data_test);

            var data_chart_3 = [{
                colorByPoint: true,
                data: [{
                    name: 'Jockey Vietnam - November HCM',
                    y: 69.3,
                    color: '#253B94'
                }, {
                    name: 'Jockey Vietnam - November HN',
                    y: 30.7,
                    color: '#FCA600'
                }]
            }];
            myPieCharts('.chart-3', data_chart_3);

            data_test[0]['name'] = 'Tổng Clicks';
            data_test[1]['name'] = 'Tổng Clicks';
            data_test[0]['data'] = [9906, 11694, 9115, 7115, 8833, 8236, 8475];
            data_test[1]['data'] = [9206, 18694, 7115, 6115, 9833, 8936, 10475];
            myLineCharts($('.chart-4'), categories_test, data_test);

            var data_chart_5 = [{
                colorByPoint: true,
                data: [{
                    name: 'Jockey Vietnam - November HCM',
                    y: 63.67,
                    color: '#253B94'
                }, {
                    name: 'Jockey Vietnam - November HN',
                    y: 36.33,
                    color: '#FCA600'
                }]
            }];
            myPieCharts('.chart-5', data_chart_5);

            data_test[0]['name'] = 'Tổng Action';
            data_test[1]['name'] = 'Tổng Action';
            data_test[0]['data'] = [7062, 11321, 6523, 4503, 7352, 4993, 6382];
            data_test[1]['data'] = [6062, 9321, 5523, 5503, 6352, 6993, 8382];
            myLineCharts($('.chart-6'), categories_test, data_test);

            var data_chart_7 = [{
                colorByPoint: true,
                data: [{
                    name: 'Jockey Vietnam - November HCM',
                    y: 59.15,
                    color: '#253B94'
                }, {
                    name: 'Jockey Vietnam - November HN',
                    y: 40.85,
                    color: '#FCA600'
                }]
            }];
            myPieCharts('.chart-7', data_chart_7);

            data_test[0]['name'] = 'Conversion Rate';
            data_test[1]['name'] = 'Conversion Rate';
            data_test[0]['data'] = [64, 84, 63, 66, 75, 63, 79];
            data_test[1]['data'] = [68, 78, 65, 46, 65, 69, 87];
            myLineCharts($('.chart-8'), categories_test, data_test);

            var data_chart_13 = [{
                colorByPoint: true,
                data: [{
                    name: 'Facebook',
                    y: 11.43,
                    color: '#253b94'
                }, {
                    name: 'Google',
                    y: 61.43,
                    color: '#d32819'
                }, {
                    name: 'Cốc cốc',
                    y: 27.14,
                    color: '#66b45b'
                }]
            }];
            myPieCharts('.chart-13', data_chart_13);

            data_test[0]['data'] = [208827, 321082, 190276, 155123, 278827, 272009, 219832];
            data_test[1]['data'] = [200827, 221082, 110276, 125123, 218827, 172009, 289832];
            myLineCharts($('.chart-14'), categories_test, data_test);

            var data_chart_15 = [{
                colorByPoint: true,
                data: [{
                    name: 'Facebook',
                    y: 56.16,
                    color: '#253b94'
                }, {
                    name: 'Google',
                    y: 32.05,
                    color: '#d32819'
                }, {
                    name: 'Cốc cốc',
                    y: 11.79,
                    color: '#66b45b'
                }]
            }];
            myPieCharts('.chart-15', data_chart_15);

            data_test[0]['name'] = 'Tổng Clicks';
            data_test[1]['name'] = 'Tổng Clicks';
            data_test[0]['data'] = [9906, 11694, 9115, 7115, 8833, 8236, 8475];
            data_test[1]['data'] = [9206, 18694, 7115, 6115, 9833, 8936, 10475];
            myLineCharts($('.chart-16'), categories_test, data_test);

            var data_chart_17 = [{
                colorByPoint: true,
                data: [{
                    name: 'Facebook',
                    y: 38.48,
                    color: '#253b94'
                }, {
                    name: 'Google',
                    y: 40.78,
                    color: '#d32819'
                }, {
                    name: 'Cốc cốc',
                    y: 20.74,
                    color: '#66b45b'
                }]
            }];
            myPieCharts('.chart-17', data_chart_17);

            data_test[0]['name'] = 'Tổng Action';
            data_test[1]['name'] = 'Tổng Action';
            data_test[0]['data'] = [7062, 11321, 6523, 4503, 7352, 4993, 6382];
            data_test[1]['data'] = [6062, 9321, 5523, 5503, 6352, 6993, 8382];
            myLineCharts($('.chart-18'), categories_test, data_test);

            // var data_chart_19 = [{
            //     colorByPoint: true,
            //     data: [{
            //         name: 'Facebook',
            //         data: 6.58,
            //         color: '#253b94'
            //     }, {
            //         name: 'Google',
            //         data: 12.22,
            //         color: '#d32819'
            //     }, {
            //         name: 'Cốc cốc',
            //         data: 16.89,
            //         color: '#66b45b'
            //     }]
            // }];
            // myColumnCharts('.chart-19', data_chart_19);

            $('.chart-19').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                xAxis: {
                    categories: [
                        'Facebook',
                        'Google',
                        'Cốc cốc'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: null
                    }
                },
                tooltip: {
                    useHTML: true,
                    formatter: function() {
                        return this.series.name + ': <b>' + Highcharts.numberFormat(this.y, 2, ',', '.') + '%</b>';
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        colorByPoint: true
                    }
                },
                series: [{
                    showInLegend: false,
                    name: 'Convertion Rate',
                    data: [{
                        y: 6.58,
                        color: '#253b94'
                    }, {
                        y: 12.22,
                        color: '#d32819'
                    }, {
                        y: 16.89,
                        color: '#78c370'
                    }]

                }]
            });

            data_test[0]['name'] = 'Conversion Rate';
            data_test[1]['name'] = 'Conversion Rate';
            data_test[0]['data'] = [64, 84, 63, 66, 75, 63, 79];
            data_test[1]['data'] = [68, 78, 65, 46, 65, 69, 87];
            myLineCharts($('.chart-20'), categories_test, data_test);
            if ($('.wrap-chart-multi').length) {
                data_test[0]['name'] = 'Tổng Click trong ngày';
                data_test[0]['yAxis'] = 1;
                data_test[0]['data'] = [149164, 144644, 183586, 190929, 220303, 255709.11, 287635.99];
                data_test[1]['name'] = 'AVG CR';
                data_test[1]['data'] = data3;
                myLineCharts($('.chart-9'), categories_test, data_test, two_yaxis);
            }

            var data_test3 = [{
                showInLegend: false,
                name: 'CPA Trung bình',
                data: data4,
                color: '#39a9c1'
            }];
            myLineCharts($('.chart-10'), categories_test, data_test3);

            var data_test4 = [{
                showInLegend: false,
                name: 'Tuần này',
                data: [89456234, 74543525, 57467367, 25766774, 68367467, 76435845, 73947856],
                test: [
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 29456234
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 60000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 34543525
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 40000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 47467367
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 10000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 5766774
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 20000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 38367467
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 30000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 26435845
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 50000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 23947856
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 50000000
                    }]
                ],
                color: '#39a9c1'
            }, {
                showInLegend: false,
                name: 'Tuần trước',
                data: [79653865, 58257753, 69535992, 48535887, 62001464, 69231090, 80153693],
                test: [
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 29653865
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 50000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 38257753
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 20000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 49535992
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 20000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 8535887
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 40000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 32001464
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 30000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 29231090
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 40000000
                    }],
                    [{
                        'name': 'Nhóm Ngạo Thiên HCM',
                        'cost': 20153693
                    }, {
                        'name': 'Nhóm Ngạo Thiên HN',
                        'cost': 60000000
                    }]
                ],
                color: '#FCA600'
            }];
            myLineCharts($('.chart-11'), categories_test, data_test4, false, function() {
                var str_tmp = '';
                $.each(this.series.options.test[this.series.data.indexOf(this.point)], function(i, v) {
                    str_tmp += '<li style="overflow: hidden;margin-bottom: 4px;"><span style="color: #39a9c1;float: left;">-' + v.name + '</span><span style="float: right;">' + Highcharts.numberFormat(v.cost, 0, ',', '.') + 'đ</span></li>';
                });
                return '<div style="font-size: 13px;"><p>TỔNG: <b style="color: ' + this.series.color + ';">' + Highcharts.numberFormat(this.y, 0, ',', '.') + 'đ</b></p><ul style="list-style: none;min-width: 300px;margin-bottom: 0;">' + str_tmp + '</ul></div>';
            });

            var data_test5 = [];
            for (var i = 0; i < 168; i++) {
                data_test5[i] = Math.floor(Math.random() * 20000) + 3000;
            };

            $('.chart-12').highcharts({
                chart: {
                    type: 'areaspline',
                    style: {
                        fontFamily: 'Arial'
                    }
                },
                title: {
                    text: ''
                },
                xAxis: [{
                    type: 'datetime',
                    tickInterval: 6 * 3600 * 1000,
                    crosshair: {
                        width: 1,
                        color: '#39a9c1'
                    },
                    labels: {
                        useHTML: true,
                        formatter: function() {
                            return '<span style="font-size: 10px;color: #59595b;">' + Highcharts.dateFormat('%H', this.value) + '</span>';
                        }
                    }

                }, {
                    type: 'datetime',
                    linkedTo: 0,
                    tickInterval: 24 * 3600 * 1000,
                    gridLineWidth: 1,
                    gridLineDashStyle: 'longdash',
                    labels: {
                        useHTML: true,
                        formatter: function() {
                            return '<span class="timeline_label" style="font-size: 13px;color: #59595b;">' + Highcharts.dateFormat('%d/%m', this.value) + '</span>';
                        }
                    }
                }],
                yAxis: {
                    title: {
                        text: null
                    },
                    crosshair: {
                        width: 1,
                        color: '#39a9c1'
                    }
                },
                tooltip: {
                    useHTML: true,
                    formatter: function() {
                        return '<span style="color: #666">' + Highcharts.dateFormat('%H:%M %d/%m/%Y', new Date(this.x)) + '</span><div>' + this.series.name + ': <b style="color: ' + this.series.color + ';">' + Highcharts.numberFormat(this.y, 0, ',', '.') + 'đ</b></div>';
                    }
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    areaspline: {
                        fillOpacity: 0.1,
                        marker: {
                            enabled: false,
                            radius: 3,
                            symbol: 'circle',
                            lineWidth: 1,
                            states: {
                                hover: {
                                    radiusPlus: 1,
                                    lineWidthPlus: 1
                                }
                            }
                        }
                    }
                },
                series: [{
                    showInLegend: false,
                    name: 'CPA Trung bình',
                    data: data_test5,
                    pointStart: Date.UTC(2015, 10, 16),
                    pointInterval: 3600 * 1000,
                    color: '#39a9c1'
                }]
            }, function(chart) {
                var $container = $(chart.container);
                var $labels = $container.find('.highcharts-axis-labels .timeline_label');
                var $thisLabel, $nextLabel, thisXPos, nextXPos, delta, newXPos;

                $labels.each(function() {
                    $thisLabel = $(this).parent('span');
                    thisXPos = parseInt($thisLabel.css('left'));
                    $nextLabel = $thisLabel.next();
                    nextXPos = $nextLabel.length ? parseInt($nextLabel.css('left')) : chart.axes[0].left + chart.axes[0].width;
                    delta = (nextXPos - thisXPos) / 2.0;
                    newXPos = thisXPos + delta;
                    if ($nextLabel.length || $(this).width() + newXPos < nextXPos) {
                        $thisLabel.css('left', newXPos + 'px');
                    } else {
                        $thisLabel.remove();
                    }
                });
            });

            var data_test6 = [{
                showInLegend: false,
                name: 'Tổng chi phí',
                data: [155796341, 202229729, 223596985, 232943174, 212173548, 170697813, 167240392],
                test: [
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 97315218
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 58458921
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 22202
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 103802899
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 74047967
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 24378863
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 119772576
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 76601345
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 27223064
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 129753624
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 70521873
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 32667677
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 123574880
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 63469686
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 25128982
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 86502416
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 60861342
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 23334055
                    }],
                    [{
                        'name': 'Facebook',
                        'icon': params.assetURL + '/images/facebook-icon.png',
                        'cost': 117799792
                    }, {
                        'name': 'Google',
                        'icon': params.assetURL + '/images/google-icon.png',
                        'cost': 40326880
                    }, {
                        'name': 'Cốc cốc',
                        'icon': params.assetURL + '/images/coccoc-icon.png',
                        'cost': 9113720
                    }]
                ],
                color: '#fca600'
            }, {
                showInLegend: false,
                name: 'Facebook',
                data: [97315218, 103802899, 119772576, 129753624, 123574880, 86502416, 117799792],
                color: '#39a9c1'
            }, {
                showInLegend: false,
                name: 'Google',
                data: [58458921, 74047967, 76601345, 70521873, 63469686, 60861342, 40326880],
                color: '#d32819'
            }, {
                showInLegend: false,
                name: 'Cốc cốc',
                data: [22202, 24378863, 27223064, 32667677, 25128982, 23334055, 9113720],
                color: '#66b45b'
            }];
            myLineCharts($('.chart-21'), categories_test, data_test6, false, function() {
                var current_year = new Date().getFullYear();
                var rs = '';
                if (typeof this.series.options.test !== 'undefined') {
                    var str_tmp = '';
                    $.each(this.series.options.test[this.series.data.indexOf(this.point)], function(i, v) {
                        str_tmp += '<li style="overflow: hidden;margin-bottom: 4px;"><span style="color: #39a9c1;float: left;"><img style="float: left; margin-right: 5px;" width="16" src="' + v.icon + '" alt="img" />' + v.name + '</span><span style="float: right;">' + Highcharts.numberFormat(v.cost, 0, ',', '.') + 'đ</span></li>';
                    });
                    rs = '<p style="color: #666; margin-bottom: 5px;">' + this.x + '/' + current_year + '</p><div style="font-size: 13px;"><p>TỔNG: <b style="color: ' + this.series.color + ';">' + Highcharts.numberFormat(this.y, 0, ',', '.') + 'đ</b></p><ul style="list-style: none;min-width: 300px;margin-bottom: 0;">' + str_tmp + '</ul></div>';
                } else {
                    rs = '<p style="color: #666; margin-bottom: 5px;">' + this.x + '/' + current_year + '</p><div style="font-size: 13px;"><p>' + this.series.name + ': <b style="color: ' + this.series.color + ';">' + Highcharts.numberFormat(this.y, 0, ',', '.') + 'đ</b></p></div>';
                }
                return rs;
            });
        }


        /* =================================
        ===  Account Linking                 ====
        =================================== */
        $(this).on('click', '.linking-now a', function() {
            $(this).parent().hide();
            $(this).parent().next().show();
            return false;
        });


        /* =================================
        ===  Create Campaign                 ====
        =================================== */
        if ($('.wrap-create-camp').length) {
            myBloodhound('language');
            myBloodhound('location', false);
            myListAll('language');            
        }
        $(this).on('click', '.location-section .btn-group a', function() {
            if(!$(this).hasClass('active')) {
                $('.location-section .btn-group a').removeClass('active');
                $(this).addClass('active');
            } 
            return false;
        });
        $(this).on('click', '.target-section input[type="radio"]', function() {
            var id = $(this).attr('id');
            if (this.checked) {
                if(id === 'target-1') {
                    $('.device-section').addClass('hidden');
                    $('.os-section').removeClass('hidden');
                } else {
                    $('.os-section').addClass('hidden');
                    $('.device-section').removeClass('hidden');
                }
            } 
        });
        $(this).on('click', '.device-section .link', function() {
            $(this).parent().addClass('hidden');
            $('.device-type').removeClass('hidden');
            return false;
        });
        $(this).on('click', '.device-section .device-type input[type="checkbox"]', function() {
            if($('.device-section .device-type input[type="checkbox"]:checked').length == 0) {
                $('.device-box').addClass('hidden');
            }
            var id = $(this).attr('id');
            if(id === 'computer') {
                if (this.checked) {
                    $('.device-box').addClass('hidden');
                } else {
                    $('.device-box').removeClass('hidden');
                }
            } 
        });
        $(this).on('click', '.os-section .btn-group a', function() {
            var type = $(this).data('type');
            var this_parent = $(this).parent();
            var all_android_devices = '<div class="form-group"><input type="checkbox" id="all-android-mobile" class="css-checkbox" /><label for="all-android-mobile" class="css-label">Tất cả điện thoại Android</label></div><div class="form-group"><input type="checkbox" id="all-android-tablet" class="css-checkbox" /><label for="all-android-tablet" class="css-label">Tất cả máy tính bảng Android</label></div>';
            var all_ios_devices = '<div class="form-group"><input type="checkbox" id="all-iphone" class="css-checkbox" /><label for="all-iphone" class="css-label">Tất cả điện thoại iPhone</label></div><div class="form-group"><input type="checkbox" id="all-ipad" class="css-checkbox" /><label for="all-ipad" class="css-label">Tất cả Máy tính bảng iPad</label></div><div class="form-group"><input type="checkbox" id="all-ipod" class="css-checkbox" /><label for="all-ipod" class="css-label">Tất cả iPod</label></div>';
            var list_android_version = '<select class="custom-select"><option value="">Tất cả phiên bản</option><option value="2.0">2.0</option><option value="2.1">2.1</option><option value="2.2">2.2</option><option value="2.3">2.3</option><option value="3.0">3.0</option><option value="3.1">3.1</option><option value="3.2">3.2</option><option value="4.0">4.0</option><option value="4.1">4.1</option><option value="4.2">4.2</option><option value="4.3">4.3</option><option value="4.4">4.4</option><option value="5.0">5.0</option><option value="5.1">5.1</option><option value="6.0">6.0</option></select>';
            var list_ios_version = '<select class="custom-select"><option value="">Tất cả phiên bản</option><option value="2.0">2.0</option><option value="3.0">3.0</option><option value="4.0">4.0</option><option value="4.3">4.3</option><option value="5.0">5.0</option><option value="6.0">6.0</option><option value="7.0">7.0</option><option value="7.1">7.1</option><option value="8.0">8.0</option><option value="8.1">8.1</option><option value="8.2">8.2</option><option value="8.3">8.3</option><option value="8.4">8.4</option><option value="9.0">9.0</option><option value="9.1">9.1</option></select>';
            if(!$(this).hasClass('active')) {
                $('.os-section .btn-group a').removeClass('active');
                $(this).addClass('active');
                if (type == 'android') {
                    $('.wrap-os-versions').html(list_android_version);
                    $('.all-devices').html(all_android_devices);
                } else if (type == 'ios') {
                    $('.wrap-os-versions').html(list_ios_version);
                    $('.all-devices').html(all_ios_devices);
                }
                $('#option-chk').attr('checked', false);
                $('.option-devices .search-device-form').addClass('hidden');
                $('.option-devices .list-multi-level').addClass('hidden');
                $('.custom-select').fancySelect();
            } 
            return false;
        });
        $(this).on('click', '.os-section .option-devices #option-chk', function() {
            if (this.checked) {
                $('.all-devices input[type="checkbox"]').prop('disabled', true);
                $('.option-devices .search-device-form').removeClass('hidden');
                $('.option-devices .list-multi-level').removeClass('hidden');
            } else {
                $('.all-devices input[type="checkbox"]').prop('disabled', false);
                $('.option-devices .search-device-form').addClass('hidden');
                $('.option-devices .list-multi-level').addClass('hidden');
            }
        });
        $(this).on('click', '.network-section .link', function() {
            if($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.network-section .list-multi-level').addClass('hidden');
            } else {
                $(this).addClass('opened');
                $('.network-section .list-multi-level').removeClass('hidden');
            }
            return false;
        });


        /* =================================
        ===  Create Rules                 ====
        =================================== */
        $(this).on('click', '.rules-type .type-item', function() {
            if(!$(this).hasClass('active')) {
                $('.rules-type .type-item').removeClass('active');
                $(this).addClass('active');
            } 
        });
        $(this).on('click', '.budget-section .btn-group a', function() {
            var end_date = $('.budget-section .wrap-daterange .end-date').val();
            if(!$(this).hasClass('active')) {
                $('.budget-section .btn-group a').removeClass('active');
                $(this).addClass('active');
                if ($(this).attr('id') == 'spread') {
                    $('.budget-section .wrap-daterange .end-date').prop('disabled', true).val('');
                    $('.budget-section .wrap-daterange .start-date').datepicker('destroy');
                    $('.budget-section .wrap-daterange .start-date').datepicker({
                        defaultDate: 'today',
                        changeMonth: true
                    });
                } else {
                    $('.budget-section .wrap-daterange .end-date').prop('disabled', false);
                    $('.budget-section .wrap-daterange .start-date').datepicker('destroy');
                    $('.budget-section .wrap-daterange .start-date').datepicker({
                        maxDate: end_date,
                        defaultDate: 'today',
                        changeMonth: true,
                        onClose: function(selectedDate) {
                            $('.budget-section .wrap-daterange .end-date').datepicker("option", "minDate", selectedDate);
                        }
                    });
                }
            } 
            return false;
        });
        $(this).on('click', '.budget-section .scheduled-link', function() {
            if($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.schedule-section').addClass('hidden');
            } else {
                $(this).addClass('opened');
                $('.schedule-section').removeClass('hidden');
                $('html, body').animate({scrollTop: $('.schedule-section').offset().top}, 1000);
            }
            return false;
        });
        

    });

})(window.jQuery);

function removeElements(text, selector) {
    var wrapped = $("<div>" + text + "</div>");
    wrapped.find(selector).remove();
    return wrapped.html();
}

function addElements(text, selector, text_add, inner) {
    var wrapped = $("<div>" + text + "</div>");
    if (inner) {
        wrapped.find(selector).html(text_add);
    } else {
        wrapped.find(selector).after(text_add);
    }
    return wrapped.html();
}

function myLineCharts(selector, categories, data, yaxis, tooltip_formatter) {
    if (typeof yaxis == 'undefined' || yaxis == false) {
        yaxis = {
            title: {
                text: null
            }
        };
    }
    if (typeof tooltip_formatter == 'undefined' || tooltip_formatter == false) {
        tooltip_formatter = function() {
            var current_year = new Date().getFullYear();
            return '<span style="color: #666">' + this.x + '/' + current_year + '</span><div>' + this.series.name + ': <b style="color: ' + this.series.color + ';">' + Highcharts.numberFormat(this.y, 0, ',', '.') + '</b></div>';
        }
    }
    $(selector).highcharts({
        chart: {
            style: {
                fontFamily: 'Arial'
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categories
        },
        yAxis: yaxis,
        tooltip: {
            useHTML: true,
            formatter: tooltip_formatter,
            backgroundColor: '#ffffff'
        },
        plotOptions: {
            series: {
                marker: {
                    radius: 3,
                    symbol: 'circle',
                    lineWidth: 1,
                    states: {
                        hover: {
                            radiusPlus: 1,
                            lineWidthPlus: 1
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        series: data
    });
}

function myPieCharts(selector, data) {
    $(selector).highcharts({
        chart: {
            type: 'pie',
            style: {
                fontFamily: 'Arial'
            }
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return this.point.name + ': <b>' + Highcharts.numberFormat(this.point.percentage, 2, ',', '.') + '%</b>';
            }
        },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: false
            }
        },
        credits: {
            enabled: false
        },
        series: data
    });
}

function myColumnCharts(selector, categories_data, data) {
    $(selector).highcharts({
        chart: {
            type: 'column',
            style: {
                fontFamily: 'Arial'
            }
        },
        xAxis: {
            categories: categories_data,
            crosshair: true
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return this.point.name + ': <b>' + Highcharts.numberFormat(this.point.percentage, 2, ',', '.') + '%</b>';
            }
        },
        credits: {
            enabled: false
        },
        series: data
    });
}

function myHighChartsCheckbox(selector, data_checked, data_unchecked) {
    $('.wrap-chart-toolbar ' + selector).click(function() {
        var chart = $('.' + $(this).data('chart')).highcharts();
        if (this.checked) {
            for (var i = 0; i < data_checked.length; i++) {
                chart.series[i].update({
                    data: data_checked[i]
                }, true);
            };
        } else {
            for (var i = 0; i < data_unchecked.length; i++) {
                chart.series[i].update({
                    data: data_unchecked[i]
                }, true);
            };
        }
    });
}

function initialize_owl(el) {
    el.owlCarousel({
        loop: true,
        dots: false,
        smartSpeed: 1200,
        margin: 10,
        items: 3
    });
    el.parent().find('.next').click(function() {
        el.trigger('next.owl.carousel');
    });
    el.parent().find('.prev').click(function() {
        el.trigger('prev.owl.carousel');
    });
    el.trigger('refresh.owl.carousel');
}

function height_calculate() {
    var h_arr = [];
    h_arr['h1'] = $(window).height() - ($('.wrap-res-table').offset().top - $(window).scrollTop());
    h_arr['h2'] = $('.res-table').height() - ($(window).height() - ($('.wrap-res-table').offset().top - $(window).scrollTop()));
    return h_arr;
}

function fixed_scrollbar(more) {
    var h_arr = height_calculate();
    if (more) {
        if (h_arr.h1 < $('.res-table').height()) {
            $('.wrap-res-table').css({
                'margin-bottom': h_arr.h2,
                'height': h_arr.h1
            });
        } else {
            $('.wrap-res-table').css({
                'margin-bottom': 0,
                'height': 'auto'
            });
        }
    } else {
        $('.wrap-res-table').css({
            'margin-bottom': h_arr.h2,
            'height': h_arr.h1
        });
    }
}

function addSuccessMessage(msg) {
    $('.main-content').append('<div class="message success-message"><span>' + msg + '</span><i class="fa fa-times"></i></div>');
    $('.main-content').find('.success-message').adtop_animation('fadeInDown');
    setTimeout(function() {
        $('.main-content').find('.success-message').adtop_animation('fadeOutUp', function() {
            $(this).hide();
        });
    }, 3000);
}

function addErrorMessage(msg) {
    $('.main-content').append('<div class="message error-message"><span>' + msg + '</span><i class="fa fa-times"></i></div>');
    $('.main-content').find('.error-message').adtop_animation('fadeInDown');
    setTimeout(function() {
        $('.main-content').find('.error-message').adtop_animation('fadeOutUp', function() {
            $(this).hide();
        });
    }, 3000);
}

function myBloodhound(type, isRemote) {
    var url = '',
        typeahead_elem = null,
        list_suggestion = null,
        empty_str = '',
        obj_return = null,
        bh_params = {};
    switch (type) {
        case 'language':
            typeahead_elem = $('#language-search');
            empty_str = 'Không tìm thấy ngôn ngữ nào.';
            obj_return = function(item) {
                return {
                    id: item.key,
                    name: item.name
                }
            };
            break;
        case 'location':
            typeahead_elem = $('#location-search');
            empty_str = 'Không tìm thấy vị trí nào.';
            obj_return = function(item) {
                return {
                    id: item.key,
                    name: item.name,
                    country: item.country_name
                }
            };
            break;
    }
    url = params.campaignJsonURL + '?type=' + type;
    bh_params = {
        datumTokenizer: function(datum) {
            return Bloodhound.tokenizers.whitespace(datum.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
    }

    if (isRemote) {
        bh_params.remote = {
            url: url,
            prepare: function(query, settings) {
                settings.type = "POST";
                settings.data = {
                    name: query
                };
                return settings;
            },
            filter: function(res) {
                return $.map(res.data, function(item) {
                    return obj_return(item);
                });
            }
        }
    } else {
        bh_params.prefetch = {
            url: url,
            cache: false,
            filter: function(res) {
                var tmp;
                return $.map(res.data, function(item) {
                    return obj_return(item);
                });
            }
        }
    }
    list_suggestion = new Bloodhound(bh_params);
    list_suggestion.initialize();
    typeahead_elem.typeahead('destroy');
    typeahead_elem.typeahead({
        hint: false,
        highlight: true,
        minLength: 3
    }, {
        name: 'name',
        display: 'name',
        source: list_suggestion,
        limit: 100,
        templates: {
            empty: '<div class="noitems">' + empty_str + '</div>',
            suggestion: Handlebars.compile('<div class="' + type + '" {{#if platform}} data-platform="{{platform}}" {{/if}} data-id="{{id}}">{{name}}</div>')
        }
    });
    typeahead_elem.bind('typeahead:render ', function() {
        $('.list-all-' + type).removeClass('visible');
    });
}

function myListAll(type, hasParent) {
    $("#" + type + "-search").focus(function() {
        if ($(this).parent().find('.tt-menu').is(':hidden')) {
            if ($('.list-all-' + type + ' ul').length == 0) {
                $.post(params.campaignJsonURL + '?html=1&type=' + type, {}, function(res) {
                    $('.list-all-' + type).html(res.data);
                }, 'json').done(function() {
                    $('.list-all-' + type).addClass('visible');
                });
            } else {
                $('.list-all-' + type).addClass('visible');
            }
        }
    });
    $('body').mouseup(function(e) {
        if ($('.list-all-' + type).is(":visible")) {
            if (!$('.list-all-' + type).is(e.target) && $('.list-all-' + type).has(e.target).length === 0 && e.target.id !== type + '-search') {
                $('.list-all-' + type).removeClass('visible');
            }
        }
    });
}