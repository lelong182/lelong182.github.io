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

    $.fn.simulateClick = function() {
        return this.each(function() {
            if ('createEvent' in document) {
                var doc = this.ownerDocument,
                    evt = doc.createEvent('MouseEvents');
                evt.initMouseEvent('click', true, true, doc.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                this.dispatchEvent(evt);
            } else {
                this.click(); // IE
            }
        });
    }

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {
            return $.getScript((path || "") + scr);
        });
        _arr.push($.Deferred(function(deferred) {
            $(deferred.resolve);
        }));
        return $.when.apply($, _arr);
    }

})(window.jQuery);

function initTableFixedHeader() {
    $('#tableheadfixer').tableHeadFixer({
        bgColor: '#4c4c4c',
        'z-index': 99,
        delayTimer: 0
    });
}

function showSettings() {
    if ($('.custom-table td input[type="checkbox"]').is(":checked")) {
        $(".quickcheck").show('slow');
    } else {

        $(".quickcheck").hide('slow');
    }
}

function customTrigger(data_parent, my_flag) {

    var class_group = ".group-" + data_parent;

    if (my_flag) {
        var flag = true;

        $(class_group + ' td input.css-checkbox').each(function() {
            if (!this.checked) flag = false;
        });

        if (flag) {
            var data_parent = $('tr[data-id=' + data_parent + ']').attr('data-parent');
            if (data_parent > 0) {
                $('tr[data-id=' + data_parent + '] td input.css-checkbox').prop('checked', flag);
            }
        }
    } else {

        if (data_parent > 0) {
            var flag = false;

            $(class_group + ' td input.css-checkbox').each(function() {
                if (this.checked) flag = true;
            });

            if (!flag) {
                var data_parent = $('tr[data-id=' + data_parent + ']').attr('data-parent');
                if (data_parent > 0) {
                    $('tr[data-id=' + data_parent + '] td input.css-checkbox').prop('checked', flag);
                }
            }
        }

    }
}

function checkingCheckAll() {

    var flag = true;
    $('tbody tr td input.css-checkbox').each(function() {
        if (!this.checked) {
            flag = false;
        }
    });

    return flag;
}

function myMinimalMenu() {
    $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
    $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
    $(document).on('mouseup', 'body', function(event) {
        if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$('.minimal-menu-button').is(event.target)) {
            $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
        }
    });
}

function myFancybox(selector) {
    if ($(selector).length) {
        $(selector).fancybox({
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
}

function myDropdown() {
    $('.dropdown').on('show.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeOut();
    });
}

function myTooltip() {
    if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });
    }
}

function myResponsiveTable(selector) {
    if ($(selector).length) {
        $(selector).ngResponsiveTables();
    }
}

function onlynumber() {
    if ($('.onlynumber').length) {
        $('.onlynumber').onlynumber();
    }
}

function numberFormat() {
    if ($('.number-format').length) {
        $('.number-format').mask('000.000.000.000.000', {
            reverse: true
        });
    }
}

function myFancySelect(selector, options) {
    if ($(selector).length) {
        $(selector).fancySelect(options);
    }
}

function mySticky(selector) {
    if ($(selector).length) {
        $(window).on('load resize', function() {
            $(selector).sticky('update');
        });
        $(selector).sticky({
            topSpacing: 0
        });
    }
}

function renderTableColor(data) {
    $('#cr-details-chart-1').tableColor(data, {
        colors: {
            '.bad': {
                '<': 10
            },
            '.normal': {
                range: [10, 15]
            },
            '.good': {
                range: [15, 20]
            },
            '.best': {
                '>=': 20
            }
        }
    });
}

function renderDateViewPicker() {
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
        applyOnMenuSelect: true,
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

function renderChart() {
    myLineChart('overview-chart-1', {
        chartData: [{
            date: '10-03-2016',
            'Impression': 743582471
        }, {
            date: '11-03-2016',
            'Impression': 692015938
        }, {
            date: '12-03-2016',
            'Impression': 789234502
        }, {
            date: '13-03-2016',
            'Impression': 689302856
        }, {
            date: '14-03-2016',
            'Impression': 712376890
        }, {
            date: '15-03-2016',
            'Impression': 602847621
        }, {
            date: '16-03-2016',
            'Impression': 975717019
        }, ],
        arrFields: [{
            name: 'Impression',
            color: '#4da445'
        }],
        hasLegend: false
    });
    myLineChart('overview-chart-2', {
        chartData: [{
            date: '10-03-2016',
            'Click': 22904
        }, {
            date: '11-03-2016',
            'Click': 22619
        }, {
            date: '12-03-2016',
            'Click': 29961
        }, {
            date: '13-03-2016',
            'Click': 24348
        }, {
            date: '14-03-2016',
            'Click': 20039
        }, {
            date: '15-03-2016',
            'Click': 14704
        }, {
            date: '16-03-2016',
            'Click': 29989
        }, ],
        arrFields: [{
            name: 'Click',
            color: '#4da445'
        }],
        hasLegend: false
    });
    myLineChart('overview-chart-3', {
        chartData: [{
            date: '10-03-2016',
            'Action': 1308
        }, {
            date: '11-03-2016',
            'Action': 1335
        }, {
            date: '12-03-2016',
            'Action': 2594
        }, {
            date: '13-03-2016',
            'Action': 1819
        }, {
            date: '14-03-2016',
            'Action': 1014
        }, {
            date: '15-03-2016',
            'Action': 851
        }, {
            date: '16-03-2016',
            'Action': 2649
        }, ],
        arrFields: [{
            name: 'Action',
            color: '#4da445'
        }],
        hasLegend: false
    });
    myMultipleLineChart('comparing-data-chart', {
        chartData: [{
            date: '10-03-2016',
            'Click': 22904,
            'CR': 6
        }, {
            date: '11-03-2016',
            'Click': 22619,
            'CR': 6
        }, {
            date: '12-03-2016',
            'Click': 29961,
            'CR': 9
        }, {
            date: '13-03-2016',
            'Click': 24348,
            'CR': 7
        }, {
            date: '14-03-2016',
            'Click': 20039,
            'CR': 5
        }, {
            date: '15-03-2016',
            'Click': 14704,
            'CR': 6
        }, {
            date: '16-03-2016',
            'Click': 29989,
            'CR': 9
        }, {
            date: '17-03-2016',
            'Click': 47324,
            'CR': 6
        }, {
            date: '18-03-2016',
            'Click': 44422,
            'CR': 5
        }],
        arrFields: [{
            name: 'Click',
            color: '#4da445',
            'position': 'left'
        }, {
            name: 'CR',
            color: '#cccccc',
            'position': 'right',
            'unit': ' %'
        }]
    });
    myMultipleLineChart('efficiency-chart', {
        chartData: [{
            date: '10-03-2016',
            'Ngân sách': 24942456,
            'CPC': 1089
        }, {
            date: '11-03-2016',
            'Ngân sách': 19361864,
            'CPC': 856
        }, {
            date: '12-03-2016',
            'Ngân sách': 33376554,
            'CPC': 1114
        }, {
            date: '13-03-2016',
            'Ngân sách': 23909736,
            'CPC': 982
        }, {
            date: '14-03-2016',
            'Ngân sách': 29196823,
            'CPC': 1457
        }, {
            date: '15-03-2016',
            'Ngân sách': 9425264,
            'CPC': 641
        }, {
            date: '16-03-2016',
            'Ngân sách': 24381057,
            'CPC': 813
        }, {
            date: '17-03-2016',
            'Ngân sách': 63461484,
            'CPC': 1341
        }, {
            date: '18-03-2016',
            'Ngân sách': 57704178,
            'CPC': 1299
        }],
        arrFields: [{
            name: 'Ngân sách',
            color: '#4da445',
            'position': 'left',
            'unit': ' VNĐ'
        }, {
            name: 'CPC',
            color: '#ff7e00',
            'position': 'right'
        }]
    });
    myLineChart('cr-details-chart-2', {
        chartData: [{
            date: '00:00 10-03-2016',
            CR: 7
        }, {
            date: '01:00 10-03-2016',
            CR: 6.5
        }, {
            date: '02:00 10-03-2016',
            CR: 6.2
        }, {
            date: '03:00 10-03-2016',
            CR: 5
        }, {
            date: '04:00 10-03-2016',
            CR: 5
        }, {
            date: '05:00 10-03-2016',
            CR: 4.9
        }, {
            date: '06:00 10-03-2016',
            CR: 5.8
        }, {
            date: '07:00 10-03-2016',
            CR: 6
        }, {
            date: '08:00 10-03-2016',
            CR: 7
        }, {
            date: '09:00 10-03-2016',
            CR: 7
        }, {
            date: '10:00 10-03-2016',
            CR: 7.3
        }, {
            date: '11:00 10-03-2016',
            CR: 6.7
        }, {
            date: '12:00 10-03-2016',
            CR: 6
        }, {
            date: '13:00 10-03-2016',
            CR: 6.2
        }, {
            date: '14:00 10-03-2016',
            CR: 7.9
        }, {
            date: '15:00 10-03-2016',
            CR: 5.7
        }, {
            date: '16:00 10-03-2016',
            CR: 7.3
        }, {
            date: '17:00 10-03-2016',
            CR: 7.8
        }, {
            date: '18:00 10-03-2016',
            CR: 8.1
        }, {
            date: '19:00 10-03-2016',
            CR: 8.5
        }, {
            date: '20:00 10-03-2016',
            CR: 8.6
        }, {
            date: '21:00 10-03-2016',
            CR: 8.5
        }, {
            date: '22:00 10-03-2016',
            CR: 8.2
        }, {
            date: '23:00 10-03-2016',
            CR: 7.4
        }, {
            date: '00:00 11-03-2016',
            CR: 8
        }, {
            date: '01:00 11-03-2016',
            CR: 6.9
        }, {
            date: '02:00 11-03-2016',
            CR: 6.8
        }, {
            date: '03:00 11-03-2016',
            CR: 6
        }, {
            date: '04:00 11-03-2016',
            CR: 5.6
        }, {
            date: '05:00 11-03-2016',
            CR: 5
        }, {
            date: '06:00 11-03-2016',
            CR: 6.2
        }, {
            date: '07:00 11-03-2016',
            CR: 6.3
        }, {
            date: '08:00 11-03-2016',
            CR: 6.9
        }, {
            date: '09:00 11-03-2016',
            CR: 7.4
        }, {
            date: '10:00 11-03-2016',
            CR: 7.1
        }, {
            date: '11:00 11-03-2016',
            CR: 7
        }, {
            date: '12:00 11-03-2016',
            CR: 7.2
        }, {
            date: '13:00 11-03-2016',
            CR: 6.6
        }, {
            date: '14:00 11-03-2016',
            CR: 5
        }, {
            date: '15:00 11-03-2016',
            CR: 4.9
        }, {
            date: '16:00 11-03-2016',
            CR: 6.9
        }, {
            date: '17:00 11-03-2016',
            CR: 7
        }, {
            date: '18:00 11-03-2016',
            CR: 8.5
        }, {
            date: '19:00 11-03-2016',
            CR: 7.5
        }, {
            date: '20:00 11-03-2016',
            CR: 8.1
        }, {
            date: '21:00 11-03-2016',
            CR: 8.6
        }, {
            date: '22:00 11-03-2016',
            CR: 7.9
        }, {
            date: '23:00 11-03-2016',
            CR: 7.2
        }, ],
        arrFields: [{
            name: 'CR',
            color: '#54b14c'
        }],
        format: 'hour',
        isFill: true,
        hasLegend: false
    });
    myPieChart('object-chart-1', {
        chartData: generateChartData2([{
            'title': 'Facebook',
            'color': '#34a853'
        }, {
            'title': 'Google',
            'color': '#dddddd'
        }]),
        arrLabel: ["84%", "15.452.000 Impression"]
    });
    myPieChart('object-chart-2', {
        chartData: generateChartData2([{
            'title': 'Facebook',
            'color': '#34a853'
        }, {
            'title': 'Google',
            'color': '#dddddd'
        }]),
        arrLabel: ["14%", "5.452.000 Impression"]
    });
    myPieChart('object-chart-3', {
        chartData: generateChartData2([{
            'title': 'Facebook',
            'color': '#34a853'
        }, {
            'title': 'Google',
            'color': '#dddddd'
        }]),
        arrLabel: ["2%", "452.000 Impression"]
    });
    myColumnChart('object-chart-4', {
        chartData: generateChartData3(["18 - 25", "26 - 30", "31 - 35", "36 - 40", "41 - 45", "46 - 50", "51 - 55", "56 - 60", "61 - 65"])
    });
}

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

function addSuccessMessage(msg) {
    $('.main').addClass('has-message');
    $('.main').prepend('<div class="message success-message"><span>' + msg + '</span><i class="fa fa-times"></i></div>');
    $('.main').find('.success-message').adtop_animation('fadeInDown', function() {
        $(".main .message").sticky({
            topSpacing: 0
        });
        $(".main .message").sticky('update');
    });
    setTimeout(function() {
        $('.main').find('.success-message').adtop_animation('fadeOutUp', function() {
            $(this).remove();
            $('.main').removeClass('has-message');
            $(".main .message").unstick();
            $(".main .message").sticky('update');
        });
    }, 20000);
}

function addErrorMessage(msg) {
    $('.main').addClass('has-message');
    $('.main').prepend('<div class="message error-message"><span>' + msg + '</span><i class="fa fa-times"></i></div>');
    $('.main').find('.error-message').adtop_animation('fadeInDown', function() {
        $(".main .message").sticky({
            topSpacing: 0
        });
        $(".main .message").sticky('update');
    });
    setTimeout(function() {
        $('.main').find('.error-message').adtop_animation('fadeOutUp', function() {
            $(this).remove();
            $('.main').removeClass('has-message');
            $(".main .message").unstick();
            $(".main .message").sticky('update');
        });
    }, 20000);
}

function floatingClick(floating_name) {
    if (!$('.floating-' + floating_name).hasClass('visible')) {
        $('.floating-' + floating_name).addClass('visible').find('.floating-inner').adtop_animation('fadeInRight');
        $('.black-overlay').addClass('visible');
        $('footer.footer').addClass('overlay');
    } else {
        $('.floating-' + floating_name).adtop_animation('fadeOutRight', function() {
            $(this).removeClass('visible');
        });
        $('.black-overlay').removeClass('visible');
        $('footer.footer').removeClass('overlay');
    }
}

function floatingClickOutside(floating_name, event) {
    var container;
    if ($('.floating-' + floating_name).hasClass('visible')) {
        container = $(".floating-" + floating_name);
        if (!container.is(event.target) && container.has(event.target).length === 0) {
            container.find('.floating-inner').adtop_animation('fadeOutRight', function() {
                $(this).closest('.floating-area').removeClass('visible');
            });
            $('.black-overlay').removeClass('visible');
            $('footer.footer').removeClass('overlay');
        }
    }
}

function countCharacter() {
    $('.count-character').each(function() {
        var text_remaining = $(this).find('.custom-input').attr('maxlength') - $(this).find('.custom-input').val().length;
        $(this).find('.count-desc').text(text_remaining);
    });
    $(document).on('keyup', '.count-character .custom-input', function() {
        var text_length = $(this).val().length;
        var text_remaining = $(this).attr('maxlength') - text_length;
        if (text_remaining < 0) {
            return false;
        }
        $(this).parent().find('.count-desc').html(text_remaining);
    });
}

function myCarousel(selectors) {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    $.each(selectors, function(idx, selector) {
        if ($(selector).length) {
            $(selector).carousel({
                interval: false
            });
            var totalItems = $(selector + ' .item').length;
            var currentIndex = $(selector + ' .item.active').index() + 1;
            $(selector + ' .carousel-counter').html(currentIndex + '/' + totalItems);
            $(selector).on('slid.bs.carousel', function() {
                currentIndex = $(selector + ' .item.active').index() + 1;
                $(selector + ' .carousel-counter').html(currentIndex + '/' + totalItems);
            });
        }
    });
}

function myOwlCarousel(selectors) {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    $.each(selectors, function(idx, selector) {
        if ($(selector).length) {
            $(selector).owlCarousel({
                center: true,
                items: 2,
                loop: true,
                margin: 10,
                nav: true,
                navText: ["<img src='assets/images/myprevimage.png'>", "<img src='assets/images/mynextimage.png'>"],
                responsive: {
                    600: {
                        items: 2
                    }
                }
            });
        }
    });
}

function myDateView() {
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
}

function myCollapTable(selector) {
    if ($(selector).length) {
        $(selector).aCollapTable({
            startCollapsed: true,
            addColumn: false,
            plusButton: '<span class="i"><img src="assets/images/minusButton.png" /></span>',
            minusButton: '<span class="i"><img src="assets/images/plusButton.png" /></span>'
        });
    }
}

function generateChartData(number, arrFields, arrType) {
    var chartData = [];
    for (var i = 0; i < number; i++) {
        var tmpDate = 10 + i;
        var newDate = tmpDate + '-03-2016';
        var tmp = {
            date: newDate
        };
        arrFields.forEach(function(val, index) {
            if (arrType[index] == 1) {
                tmp[val] = Math.round(Math.random() * 9999) + 9999;
            }
            if (arrType[index] == 2) {
                tmp[val] = (Math.random() * 10).toFixed(2);
            }
        });
        chartData.push(tmp);
    }
    return chartData;
}

function generateChartData2(chartData) {
    for (var i = 0; i < chartData.length; i++) {
        chartData[i].value = Math.round(Math.random() * 999999) + 9999;
    }
    return chartData;
}

function generateChartData3(arr) {
    var chartData = [];
    for (var i = 0; i < arr.length; i++) {
        chartData.push({});
        chartData[i].agerange = arr[i];
        chartData[i].facebook = Math.round(Math.random() * 99999) + 999;
        chartData[i].google = Math.round(Math.random() * 99999) + 999;
    }
    return chartData;
}

function chartConfig(chart, chartData, dataDateFormat, isMultiple, hasLegend) {
    if (isMultiple) {
        chart.marginRight = 0;
    } else {
        chart.marginRight = 10;
    }
    if (hasLegend) {
        chart.responsive = {
            "enabled": true,
            "rules": [{
                "overrides": {
                    "legend": {
                        "enabled": true
                    }
                }
            }]
        }
    } else {
        chart.responsive = {
            "enabled": true
        }
    }
    chart.autoMarginOffset = 0;
    chart.marginTop = 10;
    chart.marginBottom = 0;
    chart.marginLeft = 0;
    chart.dataProvider = chartData;
    chart.categoryField = "date";
    chart.language = 'vi';
    chart.dataDateFormat = dataDateFormat;
    chart.numberFormatter = {
        precision: -1,
        decimalSeparator: ",",
        thousandsSeparator: "."
    };
    chart.balloon.borderThickness = 1;
    chart.balloon.shadowAlpha = 0;
    chart.balloon.fillAlpha = 1;
    chart.balloon.fontSize = 13;
}

function categoryAxisConfig(categoryAxis, minPeriod) {
    categoryAxis.parseDates = true;
    categoryAxis.minPeriod = minPeriod;
    categoryAxis.minorGridEnabled = true;
    categoryAxis.axisColor = "#cccccc";
    categoryAxis.dateFormats = [{
        period: 'fff',
        format: 'JJ:NN:SS'
    }, {
        period: 'ss',
        format: 'JJ:NN:SS'
    }, {
        period: 'mm',
        format: 'JJ:NN'
    }, {
        period: 'hh',
        format: 'JJ:NN'
    }, {
        period: 'DD',
        format: 'DD-MM'
    }, {
        period: 'WW',
        format: 'DD'
    }, {
        period: 'MM',
        format: 'MMM'
    }, {
        period: 'YYYY',
        format: 'YYYY'
    }];
}

function chartCursorConfig(chart, balloonDateFormat, type) {
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chartCursor.pan = true;
    chartCursor.categoryBalloonDateFormat = balloonDateFormat;
    chartCursor.categoryBalloonColor = '#39a9c1';
    chartCursor.cursorColor = '#39a9c1';
    if (type == 'both') {
        chartCursor.valueLineEnabled = true;
        chartCursor.valueLineBalloonEnabled = true;
    }
    chart.addChartCursor(chartCursor);
}

function chartScrollbar(chart) {
    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.dragIconWidth = 18;
    chartScrollbar.scrollbarHeight = 5;
    chartScrollbar.backgroundAlpha = 0.1;
    chartScrollbar.backgroundColor = "#868686";
    chartScrollbar.selectedBackgroundColor = "#34a853";
    chartScrollbar.selectedBackgroundAlpha = 1;
    chartScrollbar.offset = 20;
    chart.addChartScrollbar(chartScrollbar);
}

function myLineChart(chartId, opts) {
    if (opts == null) {
        opts = {};
    }
    var settings = $.extend({
        chartData: [],
        arrFields: [],
        format: 'day',
        cursorType: 'both',
        isFill: false,
        hasLegend: true
    }, opts);

    var configChart = function() {
        var chart = new AmCharts.AmSerialChart();
        var dataDateFormat, minPeriod = '';
        if (settings.format == 'day') {
            dataDateFormat = "DD-MM-YYYY";
            minPeriod = 'DD';
            balloonDateFormat = "DD-MM-YYYY";
        }
        if (settings.format == 'hour') {
            dataDateFormat = "HH:mm DD-MM-YYYY";
            minPeriod = 'hh';
            balloonDateFormat = "JJ:NN DD-MM";
        }
        chartConfig(chart, settings.chartData, dataDateFormat, false, settings.hasLegend);
        categoryAxisConfig(chart.categoryAxis, minPeriod);

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisColor = "#cccccc";
        chart.addValueAxis(valueAxis);

        for (var i = 0; i < settings.arrFields.length; i++) {
            var graph = new AmCharts.AmGraph();
            graph.bullet = "round";
            graph.bulletBorderColor = "#FFFFFF";
            graph.bulletBorderThickness = 1;
            graph.bulletBorderAlpha = 1;
            if (settings.isFill) {
                graph.fillAlphas = 0.4;
            }
            graph.negativeLineColor = "#e74c3c";
            var balloonTextTmp = '[[value]]';
            $.each(settings.arrFields[i], function(key, value) {
                if (key == 'name') {
                    graph.valueField = value;
                    balloonTextTmp = value.capitalizeFirstLetter() + ": " + balloonTextTmp;
                    if (settings.hasLegend) {
                        graph.title = value.capitalizeFirstLetter();
                    }
                }
                if (key == 'color') {
                    graph.lineColor = value;
                }
                if (key == 'unit') {
                    balloonTextTmp = balloonTextTmp + value;
                }
                graph.balloonText = balloonTextTmp;
            });
            chart.addGraph(graph);
        }

        chartCursorConfig(chart, balloonDateFormat, settings.cursorType);
        chartScrollbar(chart);

        if (settings.hasLegend) {
            var legend = new AmCharts.AmLegend();
            legend.valueText = false;
            legend.position = "top";
            chart.addLegend(legend);
        }

        chart.write(chartId);
    };

    if (AmCharts.isReady) {
        configChart();
    } else {
        AmCharts.ready(configChart);
    }
}

function myMultipleLineChart(chartId, opts) {
    if (opts == null) {
        opts = {};
    }
    var settings = $.extend({
        chartData: [],
        arrFields: [],
        format: 'day',
        cursorType: 'both'
    }, opts);

    var configChart = function() {
        var chart = new AmCharts.AmSerialChart();
        var dataDateFormat, minPeriod = '';
        if (settings.format == 'day') {
            dataDateFormat = "DD-MM-YYYY";
            minPeriod = 'DD';
            balloonDateFormat = "DD-MM-YYYY";
        }
        if (settings.format == 'hour') {
            dataDateFormat = "HH:mm DD-MM-YYYY";
            minPeriod = 'hh';
            balloonDateFormat = "JJ:NN DD-MM";
        }
        chartConfig(chart, settings.chartData, dataDateFormat, true);
        categoryAxisConfig(chart.categoryAxis, minPeriod);

        for (var i = 0; i < settings.arrFields.length; i++) {
            var valueAxis = new AmCharts.ValueAxis();
            valueAxis.gridAlpha = 0;
            valueAxis.axisAlpha = 1;

            var graph = new AmCharts.AmGraph();
            graph.bullet = "round";
            graph.bulletBorderColor = "#FFFFFF";
            graph.bulletBorderThickness = 1;
            graph.bulletBorderAlpha = 1;
            var balloonTextTmp = '[[value]]';
            $.each(settings.arrFields[i], function(key, value) {
                if (key == 'name') {
                    valueAxis.id = value;
                    graph.valueAxis = value;
                    graph.valueField = value;
                    balloonTextTmp = value.capitalizeFirstLetter() + ": " + balloonTextTmp;
                }
                if (key == 'color') {
                    valueAxis.axisColor = value;
                    graph.lineColor = value;
                }
                if (key == 'position') {
                    valueAxis.position = value;
                }
                if (key == 'unit') {
                    valueAxis.unit = value;
                    balloonTextTmp = balloonTextTmp + value;
                }
                graph.balloonText = balloonTextTmp;
            });
            chart.addValueAxis(valueAxis);
            chart.addGraph(graph);
        }

        chartCursorConfig(chart, balloonDateFormat, settings.cursorType);
        chartScrollbar(chart);

        chart.write(chartId);
    };

    if (AmCharts.isReady) {
        configChart();
    } else {
        AmCharts.ready(configChart);
    }
}

function myPieChart(chartId, opts) {
    if (opts == null) {
        opts = {};
    }
    var settings = $.extend({
        chartData: [],
        arrLabel: []
    }, opts);

    var configChart = function() {
        var chart = new AmCharts.AmPieChart();
        chart.labelsEnabled = false;
        chart.autoMargins = false;
        chart.marginTop = 0;
        chart.marginBottom = 0;
        chart.marginLeft = 0;
        chart.marginRight = 0;
        chart.dataProvider = settings.chartData;
        chart.numberFormatter = {
            precision: -1,
            decimalSeparator: ",",
            thousandsSeparator: "."
        };
        chart.balloon.borderThickness = 1;
        chart.balloon.shadowAlpha = 0;
        chart.balloon.fillAlpha = 1;
        chart.balloon.fontSize = 13;
        chart.balloonText = "[[title]]: <span class='highlight'>[[value]]</span> ([[percents]]%)";
        chart.allLabels = [{
            "y": "37%",
            "align": "center",
            "size": 35,
            "bold": true,
            "text": settings.arrLabel[0],
            "color": "#555"
        }, {
            "y": "53%",
            "align": "center",
            "size": 14,
            "text": settings.arrLabel[1],
            "color": "#555"
        }];
        chart.titleField = "title";
        chart.valueField = "value";
        chart.colorField = "color";
        chart.radius = '42%';
        chart.innerRadius = "90%";

        var legend = new AmCharts.AmLegend();
        legend.align = 'center';
        legend.valueWidth = 180;
        legend.fontSize = 14;
        legend.color = '#555555';
        legend.labelText = "[[title]]:";
        legend.valueText = "[[value]] ([[percents]]%)";
        chart.addLegend(legend);

        chart.write(chartId);
    };

    if (AmCharts.isReady) {
        configChart();
    } else {
        AmCharts.ready(configChart);
    }
}

function myColumnChart(chartId, opts) {
    if (opts == null) {
        opts = {};
    }
    var settings = $.extend({
        chartData: [],
        arrLabel: []
    }, opts);

    var sum = 0;
    for (var x in settings.chartData) {
        sum += settings.chartData[x].facebook + settings.chartData[x].google;
    }
    for (var x in settings.chartData) {
        settings.chartData[x].facebookPercent = (settings.chartData[x].facebook / sum * 100).toFixed(2);
        settings.chartData[x].googlePercent = (settings.chartData[x].google / sum * 100).toFixed(2);
    }

    var configChart = function() {
        var chart = new AmCharts.AmSerialChart();
        chart.autoMarginOffset = 0;
        chart.marginTop = 10;
        chart.marginRight = 10;
        chart.marginBottom = 0;
        chart.marginLeft = 0;
        chart.dataProvider = settings.chartData;
        chart.categoryField = "agerange";
        chart.numberFormatter = {
            precision: -1,
            decimalSeparator: ",",
            thousandsSeparator: "."
        };
        chart.balloon.borderThickness = 1;
        chart.balloon.shadowAlpha = 0;
        chart.balloon.fillAlpha = 1;
        chart.balloon.fontSize = 13;
        chart.responsive = {
            "enabled": true,
            "rules": [{
                "overrides": {
                    "legend": {
                        "enabled": true
                    }
                }
            }]
        }

        var categoryAxis = chart.categoryAxis;
        categoryAxis.minorGridEnabled = true;
        categoryAxis.axisColor = "#cccccc";

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisColor = "#cccccc";
        chart.addValueAxis(valueAxis);

        var graph = new AmCharts.AmGraph();
        graph.valueField = 'facebook';
        graph.title = 'Facebook';
        graph.lineColor = '#c5e1a5';
        graph.type = "column";
        graph.fillAlphas = 0.8;
        graph.labelText = "[[facebookPercent]] %";
        graph.balloonText = '<div class="text-left"><strong>[[facebookPercent]] %</strong><br /><span class="highlight">[[value]] impression</span></div>';
        graph.fixedColumnWidth = 45;
        chart.addGraph(graph);

        var graph = new AmCharts.AmGraph();
        graph.valueField = 'google';
        graph.title = 'Google';
        graph.lineColor = '#ffcc80';
        graph.type = "column";
        graph.fillAlphas = 0.8;
        graph.labelText = "[[googlePercent]] %";
        graph.balloonText = '<div class="text-left"><strong>[[googlePercent]] %</strong><br /><span class="highlight">[[value]] impression</span></div>';
        graph.fixedColumnWidth = 45;
        chart.addGraph(graph);

        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorPosition = "mouse";
        chartCursor.pan = true;
        chartCursor.categoryBalloonColor = '#39a9c1';
        chartCursor.cursorColor = '#39a9c1';
        chartCursor.valueLineEnabled = true;
        chartCursor.valueLineBalloonEnabled = true;
        chart.addChartCursor(chartCursor);
        chartScrollbar(chart);

        var legend = new AmCharts.AmLegend();
        legend.valueText = false;
        legend.fontSize = 14;
        legend.color = '#555555';
        legend.align = 'center';
        legend.position = "top";
        chart.addLegend(legend);

        chart.write(chartId);
    };

    if (AmCharts.isReady) {
        configChart();
    } else {
        AmCharts.ready(configChart);
    }
}

function stickySelectedBox() {
    $(window).on('load resize', function() {
        if (Modernizr.mq('(min-width: 1200px)')) {
            if (!$(".main-content .selected-box").parent('.sticky-wrapper').length) {
                $(".main-content .selected-box").sticky({
                    topSpacing: 0,
                    bottomSpacing: $('footer.footer').height() + $('.foot-main-content').height() + 66
                });
            }
        } else {
            $(".main-content .selected-box").unstick();
        }
    });
}

function addJs(links, idx) {
    var body = document.getElementsByTagName('body')[0];
    if (typeof idx === 'undefined') {
        links.forEach(function(link, index) {
            var tag = document.createElement('script');
            tag.src = link;
            body.appendChild(tag);
        });
    } else {
        var tags = document.querySelectorAll('[data-id="' + idx + '"]');
        if (tags.length === 0) {
            links.forEach(function(link, index) {
                var tag = document.createElement('script');
                tag.src = link;
                tag.setAttribute('data-id', idx);
                body.appendChild(tag);
            });
        }
    }
}

function addJsAjax(links, callback, path) {
    if (typeof links === 'string') {
        links = [links];
    }
    $.getMultiScripts(links, path).done(function() {
        callback();
    });
}

function addCss(links, idx) {
    var head = document.getElementsByTagName('head')[0];
    if (typeof idx === 'undefined') {
        links.forEach(function(link, index) {
            var tag = document.createElement('link');
            tag.src = link;
            head.appendChild(tag);
        });
    } else {
        var tags = document.querySelectorAll('[data-id="' + idx + '"]');
        if (tags.length === 0) {
            links.forEach(function(link, index) {
                var tag = document.createElement('link');
                tag.src = link;
                tag.setAttribute('data-id', idx);
                head.appendChild(tag);
            });
        }
    }
}

function myScrollbar(selectors, options) {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    if (typeof options === 'undefined') {
        options = null;
    }
    $.each(selectors, function(idx, selector) {
        if ($(selector).length) {
            $(selector).mCustomScrollbar(options);
        }
    });
}

function completePage() {
    if ($('.complete-page').length) {
        $(document).on('click', '.wrap-complete-create-campaign .distribution-type input[type="radio"]', function() {
            if (this.checked) {
                if ($(this).val() == 2) {
                    $('.distribution-manually').removeClass('hidden');
                    $(this).parent().addClass('hidden');
                    $('.return-link').removeClass('hidden');
                }
            }
        });
        $(document).on('click', '.wrap-complete-create-campaign .return-link', function() {
            $('.distribution-manually').addClass('hidden');
            $(this).addClass('hidden');
            $('.distribution-type').removeClass('hidden');
            $('.wrap-complete-create-campaign .distribution-type #auto-type').prop('checked', true)
            return false;
        });

        var complete_cloud = $('.wrap-complete-create-campaign .cloud');
        var complete_rocket = $('.wrap-complete-create-campaign .rocket');
        var complete_message = $('.wrap-complete-create-campaign .successfully-created-message');
        var complete_content = $('.wrap-complete-create-campaign .complete-create-campaign-inner');
        var tl1 = new TimelineMax();
        tl1
            .to(complete_rocket, 1.5, {
                bottom: '35%',
                y: 0,
                ease: Expo.easeOut
            }, 1)
            .from(complete_message, 0.6, {
                autoAlpha: 0,
                y: 100,
                ease: Power1.easeIn
            }, '-=1.2')
            .to(complete_rocket, 0.8, {
                bottom: '100%',
                y: 0,
                ease: Expo.easeIn
            }, '+=0.8')
            .to(complete_message, 0.6, {
                autoAlpha: 0,
                y: 100,
                ease: Power1.easeOut
            }, '-=0.4')
            .fromTo(complete_content, 1, {
                scale: 0
            }, {
                scale: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.2');
        var tl2 = new TimelineMax({
            repeat: -1
        });
        tl2.to(complete_cloud, 50, {
            backgroundPosition: '2732px 0',
            ease: Power0.easeOut
        });
    }

}

function myCopyClipboard(selector) {
    if ($(selector).length) {
        new Clipboard(selector);
    }
}

function myModal(selector) {
    if ($(selector).length) {
        $(selector).modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
    }
}

function popupCenter(url, title, w, h) {
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    if (window.focus) {
        newWindow.focus();
    }
}

function clickOutSide(selector, callback) {
    $(document).on('mouseup', 'body', function(event) {
        if (!$(selector).is(event.target) && $(selector).has(event.target).length === 0) {
            callback();
        }
    });
}