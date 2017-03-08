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

    $.fn.simulateClick = function () {
        return this.each(function () {
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

    $.fn.putCursorAtEnd = function () {
        return this.each(function () {
            var $el = $(this),
                el = this;
            if (!$el.is(":focus")) {
                $el.focus();
            }
            if (el.setSelectionRange) {
                var len = $el.val().length * 2;
                setTimeout(function () {
                    el.setSelectionRange(len, len);
                }, 1);

            } else {
                $el.val($el.val());
            }
            this.scrollTop = 999999;
        });
    };

    String.prototype.capitalizeFirstLetter = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $.getMultiScripts = function (arr, path) {
        var _arr = $.map(arr, function (scr) {
            return $.getScript((path || "") + scr);
        });
        _arr.push($.Deferred(function (deferred) {
            $(deferred.resolve);
        }));
        return $.when.apply($, _arr);
    }

})(window.jQuery);

function commonFunctions() {
    myMinimalMenu();
    myTooltip();
    myDropdown();
    onlynumber();
    myFancySelect('.custom-select');
}

function topBarScripts() {
    $(document).on('click', '.topbar .notifications-link', function (e) {
        var this_parent = $(this).closest('li');
        var list_notifications = this_parent.find('.list-notifications');
        if (list_notifications.hasClass('open')) {
            this_parent.removeClass('active');
            list_notifications.removeClass('open');
        } else {
            this_parent.addClass('active');
            list_notifications.addClass('open');
        }
    });
    $(document).on('mouseup', 'body', function (event) {
        if (!$('.topbar .list-notifications').is(event.target) && $('.topbar .list-notifications').has(event.target).length === 0 && !$('.topbar .notifications-link i').is(event.target)) {
            if ($('.topbar .list-notifications').hasClass('open')) {
                $('.topbar .list-notifications').removeClass('open');
                $('.topbar .list-notifications').closest('li').removeClass('active');
            }
        }
    });
    $(document).on('click', '.topbar .person-link', function (e) {
        var this_parent = $(this).closest('li');
        var person_actions = this_parent.find('.person-actions');
        if (person_actions.hasClass('open')) {
            this_parent.removeClass('active');
            person_actions.removeClass('open');
        } else {
            this_parent.addClass('active');
            person_actions.addClass('open');
        }
    });
    $(document).on('click', '.topbar .wrap-list-person .current-person', function (e) {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.person-actions').removeClass('has-list');
        } else {
            $(this).addClass('opened');
            $('.person-actions').addClass('has-list');
        }
    });
    $(document).on('mouseup', 'body', function (event) {
        if (!$('.topbar .person-actions').is(event.target) && $('.topbar .person-actions').has(event.target).length === 0 && !$('.topbar .person-link').is(event.target)) {
            if ($('.topbar .person-actions').hasClass('open')) {
                $('.topbar .person-actions').removeClass('open');
                $('.topbar .person-actions').closest('li').removeClass('active');
            }
        }
    });
    $(document).on('click', '.topbar .campaign-manager h3', function (e) {
        var campaign_items = $('.campaign-items');
        if (campaign_items.hasClass('open')) {
            campaign_items.removeClass('open');
            $(this).find('.arrow-icon').text('arrow_drop_down');
        } else {
            campaign_items.addClass('open');
            $(this).find('.arrow-icon').text('arrow_drop_up');
        }
    });
    $(document).on('mouseup', 'body', function (event) {
        if (!$('.topbar .campaign-manager .campaign-items').is(event.target) && $('.topbar .campaign-manager .campaign-items').has(event.target).length === 0 && !$('.topbar .campaign-manager h3').is(event.target)) {
            if ($('.topbar .campaign-manager .campaign-items').hasClass('open')) {
                $('.topbar .campaign-manager .campaign-items').removeClass('open');
                $('.topbar .campaign-manager h3 .arrow-icon').text('arrow_drop_down');
            }
        }
    });
    $(document).on('click', '.topbar .search-form button[type="submit"]', function () {
        $('.topbar .main-nav, .topbar .campaign-manager, .topbar .creat-campaign-btn, .topbar .top-links').adtop_animation('fadeOut', function () {
            $(this).addClass('hidden');
        });
        var this_form = $(this).parent('.search-form');
        this_form.addClass('open');
        setTimeout(function () {
            this_form.find('input').focus();
        }, 100);
        $('.wrapper').before('<div class="window-overlay"></div>');
        return false;
    });
    clickOutSide('.topbar .search-form', function () {
        if ($('.topbar .search-form').hasClass('open')) {
            $('.topbar .search-form').removeClass('open');
            $('.topbar .main-nav, .topbar .campaign-manager, .topbar .creat-campaign-btn, .topbar .top-links').removeClass('hidden').adtop_animation('fadeIn');
            $('.window-overlay').remove();
        }
    });
    var share_by_name = $('.share-by-name').marquee({
        delayBeforeStart: 0,
        duration: 2000,
        startVisible: true
    });
    share_by_name.marquee('pause');
    $(document).on({
        mouseover: function () {
            share_by_name.marquee('resume');
        },
        mouseleave: function () {
            share_by_name.marquee('pause');
        }
    }, '.topbar .share-by-name');
}

function myMinimalMenu() {
    $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
    $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
    $(document).on('mouseup', 'body', function (event) {
        if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$('.minimal-menu-button').is(event.target)) {
            $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
        }
    });
    $(document).on('click', '.minimal-menu .close-sidebar', function (event) {
        $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
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
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).fadeIn();
    });
    $('.dropdown').on('hide.bs.dropdown', function (e) {
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

function onlynumber() {
    if ($('.onlynumber').length) {
        $('.onlynumber').onlynumber();
    }
}

function numberFormat(selector, format, limit) {
    if ($(selector).length) {
        if (typeof limit !== 'undefined') {
            $(selector).mask(format, {
                reverse: true,
                onKeyPress: function (cep, e, field, options) {
                    cep = cep.split('.').join('');
                    if (cep < limit) {
                        field.val(limit);
                    }
                }
            });
        } else {
            $(selector).mask(format, {
                reverse: true
            });
        }
    }
}

function fancySelect(selector, options, callback) {
    selector = selector || '.custom-select';
    options = options || {};
    options.includeBlank = true;

    if ($(selector).length) {
        $(selector)
            .fancySelect(options)
            .on('change.fs', function () {
                $(this).children('option[value="' + $(this).val() + '"]').trigger('click');
                $(this).trigger('change.$');
                if (typeof callback == 'function') {
                    callback(this);
                }
            });
    }
}

function myFancySelect(selector, options) {
    if ($(selector).length) {
        $(selector).fancySelect(options);
    }
}

function mySelect2(selector, options) {
    if ($(selector).length) {
        $(selector).select2(options);
    }
}

function updateFancySelect(selector, callback) {
    if (selector === null || typeof selector == 'undefined') {
        selector = '.custom-select';
    }
    var this_parent = $(selector).parent();
    this_parent.find('.trigger').remove();
    this_parent.find('.options').remove();
    $(selector).removeClass('fancified').removeAttr('style');
    setTimeout(function () {
        fancySelect(selector, {}, callback);
    }, 0);
}

var ctrl = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene();
function mySticky(selector, options) {
    if ($(selector).length) {
        var offset = 0;
        var side = '';
        var side_val = 0;
        if (typeof options == 'number') {
            offset = options;
        } else {
            offset = options[Object.keys(options)[0]];
            side = Object.keys(options)[1];
            side_val = options[Object.keys(options)[1]];
        }
        var this_position_type = $(selector).css('position');
        $(selector).removeAttr('style');
        scene
            .offset(offset)
            .on("enter", function () {
                if (side == 'left') {
                    $(selector).css({
                        position: 'fixed',
                        left: side_val
                    });
                } else if (side == 'right') {
                    $(selector).css({
                        position: 'fixed',
                        right: side_val
                    });
                } else {
                    $(selector).css({
                        position: 'fixed'
                    });
                }
            })
            .on("leave", function () {
                if (side == 'left') {
                    $(selector).css({
                        position: this_position_type,
                        left: 'initial'
                    });
                } else if (side == 'right') {
                    $(selector).css({
                        position: this_position_type,
                        right: 'initial'
                    });
                } else {
                    $(selector).css({
                        position: this_position_type
                    });
                }
            })
            .addTo(ctrl);
        if (offset < 0) {
            ctrl.enabled(false);
            scene.enabled(false);
        } else {
            ctrl.enabled(true);
            scene.enabled(true);
        }
        scene.update(true);
        ctrl.update(true);
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

function setCustomRanges(selector, start, end) {
    if ($(selector).length) {
        if (typeof start == 'undefined') {
            start = null;
        }
        if (typeof end == 'undefined') {
            end = null;
        }
        $(selector).daterangepicker("setRange", {
            start: start,
            end: end
        });
    }
}

function renderDateViewPicker(selector, callback, startDate) {
    if (typeof startDate == 'undefined') {
        startDate = null;
    }
    if ($(selector).length) {
        $(selector).daterangepicker({
            initialText: 'Xem theo ngày',
            applyButtonText: 'Xem',
            clearButtonText: null,
            cancelButtonText: null,
            dateFormat: 'dd/mm/yy',
            presetRanges: [{
                text: 'Hôm qua',
                val: 'yesterday',
                dateStart: function () {
                    return moment().subtract(1, 'days')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'days')
                }
            }, {
                text: 'Tuần trước',
                val: 'lastweek',
                dateStart: function () {
                    return moment().subtract(1, 'weeks').startOf("isoweek")
                },
                dateEnd: function () {
                    return moment().subtract(1, 'weeks').endOf("isoweek")
                }
            }, {
                text: '7 ngày trước',
                val: '7days',
                dateStart: function () {
                    return moment().subtract(7, 'days')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'days')
                }
            }, {
                text: 'Tháng trước',
                val: 'lastmonth',
                dateStart: function () {
                    return moment().subtract(1, 'months').startOf('month')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'months').endOf('month')
                }
            }, {
                text: '30 ngày trước',
                val: '30days',
                dateStart: function () {
                    return moment().subtract(30, 'days')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'days')
                }
            }, {
                text: 'Hôm nay',
                dateStart: function () {
                    return moment()
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: 'Tuần này',
                val: 'thisweek',
                dateStart: function () {
                    return moment().startOf('isoweek')
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: '14 ngày trước',
                val: '14days',
                dateStart: function () {
                    return moment().subtract(14, 'days')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'days')
                }
            }, {
                text: 'Tháng này',
                val: 'thismonth',
                dateStart: function () {
                    return moment().startOf('month')
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: 'Tất cả thời gian',
                val: 'alldays',
                dateStart: function () {
                    return startDate
                },
                dateEnd: function () {
                    return moment()
                }
            }],
            applyOnMenuSelect: true,
            datepickerOptions: {
                minDate: null,
                maxDate: 0,
                numberOfMonths: 2,
                showCurrentAtPos: 1,
                onSelect: function (dateText, datePicker) {
                    datePicker.drawMonth += 1;
                }
            },
            onChange: function () {
                if (typeof callback == 'function') {
                    var data = JSON.parse($(selector).val());
                    if (data['start'] === startDate.format('YYYY-MM-DD') && data['end'] === moment().format('YYYY-MM-DD')) {
                        callback({
                            val: 'alldays',
                            start: null,
                            end: null
                        });
                    } else {
                        callback(data);
                    }
                }
            }
        });
    }
}

function renderChart() {

    $('.overview-tabs a[data-toggle="tab"]').on('shown.bs.tab', function () {
        myLineChart('overview-chart-1', {
            chartData: [{
                date: '10-03-2016',
                'Impression1': 743582471,
                'Impression2': 543845431
            }, {
                date: '11-03-2016',
                'Impression1': 692015938,
                'Impression2': 125462454
            }, {
                date: '12-03-2016',
                'Impression1': 789234502,
                'Impression2': 235645462
            }, {
                date: '13-03-2016',
                'Impression1': 689302856,
                'Impression2': 845646243
            }, {
                date: '14-03-2016',
                'Impression1': 712376890,
                'Impression2': 576354724
            }, {
                date: '15-03-2016',
                'Impression1': 602847621,
                'Impression2': 946534576
            }, {
                date: '16-03-2016',
                'Impression1': 975717019,
                'Impression2': 256765437
            },],
            arrFields: [{
                name: 'Impression1',
                color: '#4da445',
                title: 'Impression'
            }, {
                name: 'Impression2',
                color: '#cccccc',
                title: 'Impression'
            }],
            arrExtraText: ['Tuần này', 'Tuần sau']
        });
        myLineChart('overview-chart-2', {
            chartData: [{
                date: '10-03-2016',
                'Click1': 22904,
                'Click2': 64231
            }, {
                date: '11-03-2016',
                'Click1': 22619,
                'Click2': 43251
            }, {
                date: '12-03-2016',
                'Click1': 29961,
                'Click2': 13564
            }, {
                date: '13-03-2016',
                'Click1': 24348,
                'Click2': 34624
            }, {
                date: '14-03-2016',
                'Click1': 20039,
                'Click2': 12532
            }, {
                date: '15-03-2016',
                'Click1': 14704,
                'Click2': 22904
            }, {
                date: '16-03-2016',
                'Click1': 29989,
                'Click2': 63421
            },],
            arrFields: [{
                name: 'Click1',
                color: '#4da445',
                title: 'Click'
            }, {
                name: 'Click2',
                color: '#cccccc',
                title: 'Click'
            }],
            arrExtraText: ['Tuần này', 'Tuần sau']
        });
        myLineChart('overview-chart-3', {
            chartData: [{
                date: '10-03-2016',
                'Action1': 1308,
                'Action2': 2314
            }, {
                date: '11-03-2016',
                'Action1': 1335,
                'Action2': 954
            }, {
                date: '12-03-2016',
                'Action1': 2594,
                'Action2': 1634
            }, {
                date: '13-03-2016',
                'Action1': 1819,
                'Action2': 3215
            }, {
                date: '14-03-2016',
                'Action1': 1014,
                'Action2': 935
            }, {
                date: '15-03-2016',
                'Action1': 851,
                'Action2': 2735
            }, {
                date: '16-03-2016',
                'Action1': 2649,
                'Action2': 1963
            },],
            arrFields: [{
                name: 'Action1',
                color: '#4da445',
                title: 'Action'
            }, {
                name: 'Action2',
                color: '#cccccc',
                title: 'Action'
            }],
            arrExtraText: ['Tuần này', 'Tuần sau']
        });
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
            position: 'left',
            title: 'Click'
        }, {
            name: 'CR',
            color: '#cccccc',
            position: 'right',
            unit: ' %',
            title: 'CR'
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
            position: 'left',
            unit: ' VNĐ',
            title: 'Ngân sách'
        }, {
            name: 'CPC',
            color: '#ff7e00',
            position: 'right',
            title: 'CPC'
        }]
    });
    myLineChart('cr-details-chart-2', {
        chartData: [
            {
                "date": "00:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "01:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "02:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "03:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "04:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "05:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "06:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "07:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "08:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "09:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "10:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "11:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "12:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "13:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "14:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "15:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "16:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "17:00 02-01-2017",
                "CR": 133.33
            },
            {
                "date": "18:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "19:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "20:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "21:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "22:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "23:00 02-01-2017",
                "CR": 0
            },
            {
                "date": "00:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "01:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "02:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "03:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "04:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "05:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "06:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "07:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "08:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "09:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "10:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "11:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "12:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "13:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "14:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "15:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "16:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "17:00 03-01-2017",
                "CR": 66.67
            },
            {
                "date": "18:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "19:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "20:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "21:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "22:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "23:00 03-01-2017",
                "CR": 0
            },
            {
                "date": "00:00 04-01-2017",
                "CR": 0
            }
        ],
        arrFields: [{
            name: 'CR',
            color: '#54b14c',
            title: 'CR'
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

var text_arr = [];
function addMessage(text, type, duration) {
    var check_index = $.inArray(text, text_arr);
    if (check_index === -1) {
        var pushed_index = text_arr.push(text) - 1;
        if (text == null || typeof text == 'undefined') {
            text = 'Test message!';
        }
        if (type == null || typeof type == 'undefined') {
            type = 'success';
        }
        if (duration == null || typeof duration == 'undefined') {
            duration = 20;
        }
        duration *= 1000;
        var n = noty({
            type: type,
            text: text,
            animation: {
                open: 'animated flipInX',
                close: 'animated flipOutX',
                easing: 'swing',
                speed: 500
            },
            maxVisible: 8,
            closeWith: ['button']
        });
        setTimeout(function () {
            n.close();
            if (pushed_index >= 0) {
                text_arr.splice(pushed_index, 1);
            }
        }, duration);
    }
}

function closeAllMessage() {
    $.noty.closeAll();
    text_arr = [];
}

function addLoading(msg, no_loading) {
    if (msg == null || typeof msg == 'undefined') {
        msg = 'Đang Load Dữ Liệu...';
    }
    if (no_loading) {
        $('body').prepend('<div class=\"loading-balloon\"><h5 class="mgt-0">' + msg + '</h5></div>');
    } else {
        $('body').prepend('<div class=\"loading-balloon\"><i class=\"fa fa-spinner fa-pulse\"></i><h5>' + msg + '</h5></div>');
    }
    $('.loading-balloon').adtop_animation('fadeIn');
}

function removeLoading() {
    $('.loading-balloon').adtop_animation('fadeOut', function () {
        $(this).remove();
    });
}

function floatingClick(floating_name) {
    if (!$('.floating-' + floating_name).hasClass('visible')) {
        $('.floating-' + floating_name).addClass('visible').find('.floating-inner').adtop_animation('fadeInRight');
        $('.black-overlay').addClass('visible');
        $('footer.footer').addClass('overlay');
    } else {
        $('.floating-' + floating_name).adtop_animation('fadeOutRight', function () {
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
            container.find('.floating-inner').adtop_animation('fadeOutRight', function () {
                $(this).closest('.floating-area').removeClass('visible');
            });
            $('.black-overlay').removeClass('visible');
            $('footer.footer').removeClass('overlay');
        }
    }
}

function countCharacter() {
    var flag = '';
    $(document).on('keyup', '.count-character .custom-input', function () {
        var input_name = $(this).attr('name') !== undefined ? $(this).attr('name') : 'empty';
        var text_length = $(this).val().length;
        var max_length = $(this).attr('maxlength') - 1;
        var text_remaining = $(this).attr('maxlength') - (text_length == $(this).attr('maxlength') ? text_length : text_length + 1);
        if (text_length < $(this).attr('maxlength')) {
            flag = '';
            closeAllMessage();
        }
        if (flag == input_name) {
            addMessage('Bạn không được nhập ' + $(this).attr('placeholder').toLowerCase() + ' quá ' + max_length + ' ký tự', 'error');
            $(this).addClass('invalid_count');
        } else {
            $(this).removeClass('invalid_count');
            if (text_length >= $(this).attr('maxlength')) {
                flag = input_name;
                addMessage('Bạn không được nhập ' + $(this).attr('placeholder').toLowerCase() + ' quá ' + max_length + ' ký tự', 'error');
                $(this).addClass('invalid_count');
            }
        }
        $(this).parent().find('.count-desc').html(text_remaining);
        if (text_remaining < 0) {
            return false;
        }
    });
}

function checkCountCharacter() {
    $('.count-character').each(function () {
        var text_length = $(this).find('.custom-input').val().length;
        var max_length = $(this).find('.custom-input').attr('maxlength');
        var text_remaining = max_length - (text_length == max_length ? text_length : text_length + 1);
        $(this).find('.count-desc').text(text_remaining);
    });
}

function myCarousel(selectors) {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    $.each(selectors, function (idx, selector) {
        if ($(selector).length) {
            $(selector).carousel({
                interval: false
            });
            var totalItems = $(selector + ' .item').length;
            var currentIndex = $(selector + ' .item.active').index() + 1;
            $(selector + ' .carousel-counter').html(currentIndex + '/' + totalItems);
            $(selector).on('slid.bs.carousel', function () {
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
    $.each(selectors, function (idx, selector) {
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

function myDateLocalize(lang) {
    $.datepicker.setDefaults($.datepicker.regional[lang]);
}

function myDateView(callback) {
    if ($('.wrap-daterange').length) {
        $(".wrap-daterange .start-date").datepicker({
            defaultDate: new Date(),
            changeMonth: true,
            minDate: new Date(),
            numberOfMonths: 1,
            dateFormat: 'dd/mm/yy',
            onClose: function (selectedDate) {
                if (selectedDate !== "" && $(".wrap-daterange .end-date").val() == '') {
                    $(".wrap-daterange .end-date").datepicker("option", "minDate", selectedDate);
                }
                if (typeof callback == 'function') {
                    callback({
                        key: 'start',
                        value: selectedDate
                    });
                }
            }
        });
        $(".wrap-daterange .end-date").datepicker({
            defaultDate: new Date(),
            changeMonth: true,
            minDate: new Date(),
            numberOfMonths: 1,
            dateFormat: 'dd/mm/yy',
            onClose: function (selectedDate) {
                $(".wrap-daterange .start-date").datepicker("option", "maxDate", selectedDate);
                if (typeof callback == 'function') {
                    callback({
                        key: 'end',
                        value: selectedDate
                    });
                }
            }
        });
        $(".wrap-daterange .glyphicon-calendar").click(function () {
            if (!$(this).prev().prop('disabled')) {
                $(this).prev().datepicker("show");
            }
        });
    }
}

function myCollapTable(selector, column) {
    if (column == null || typeof column == 'undefined') {
        column = 0;
    }
    if ($(selector).length) {
        $(selector).aCollapTable({
            startCollapsed: true,
            addColumn: false,
            plusButton: '<span class="plus-icon"></span>',
            minusButton: '<span class="minus-icon"></span>',
            nthColumn: column
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
        arrFields.forEach(function (val, index) {
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
    chartCursor.categoryBalloonColor = '#ff7e00';
    chartCursor.cursorColor = '#ff7e00';
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
        arrExtraText: [],
        format: 'day',
        cursorType: 'both',
        isFill: false,
        hasLegend: true
    }, opts);

    var configChart = function () {
        var chart = new AmCharts.AmSerialChart();
        var dataDateFormat, minPeriod = '';
        if (settings.format == 'year') {
            dataDateFormat = "YYYY";
            minPeriod = 'YYYY';
            balloonDateFormat = "YYYY";
        }
        if (settings.format == 'month') {
            dataDateFormat = "MM-YYYY";
            minPeriod = 'MM';
            balloonDateFormat = "MM-YYYY";
        }
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
        valueAxis.minimum = 0;
        chart.addValueAxis(valueAxis);

        for (var i = 0; i < settings.arrFields.length; i++) {
            var graph = new AmCharts.AmGraph();
            graph.bullet = "round";
            graph.bulletBorderColor = "#FFFFFF";
            graph.bulletBorderThickness = 1;
            graph.bulletBorderAlpha = 1;
            graph.type = "smoothedLine";
            if (settings.isFill) {
                graph.fillAlphas = 0.4;
            }
            graph.negativeLineColor = "#e74c3c";
            var balloonTextTmp = '[[value]]';
            var extraText = settings.arrExtraText.length > 0 ? ' (' + settings.arrExtraText[i] + ')' : '';
            $.each(settings.arrFields[i], function (key, value) {
                if (key == 'title') {
                    balloonTextTmp = value.capitalizeFirstLetter() + ": " + balloonTextTmp;
                    if (settings.hasLegend) {
                        graph.title = value.capitalizeFirstLetter() + extraText;
                    }
                }
                if (key == 'name') {
                    graph.valueField = value;
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

    var configChart = function () {
        var chart = new AmCharts.AmSerialChart();
        var dataDateFormat, minPeriod = '';
        if (settings.format == 'year') {
            dataDateFormat = "YYYY";
            minPeriod = 'YYYY';
            balloonDateFormat = "YYYY";
        }
        if (settings.format == 'month') {
            dataDateFormat = "MM-YYYY";
            minPeriod = 'MM';
            balloonDateFormat = "MM-YYYY";
        }
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
            valueAxis.minimum = 0;

            var graph = new AmCharts.AmGraph();
            graph.bullet = "round";
            graph.bulletBorderColor = "#FFFFFF";
            graph.bulletBorderThickness = 1;
            graph.bulletBorderAlpha = 1;
            graph.type = "smoothedLine";
            var balloonTextTmp = '[[value]]';
            $.each(settings.arrFields[i], function (key, value) {
                if (key == 'title') {
                    balloonTextTmp = value.capitalizeFirstLetter() + ": " + balloonTextTmp;
                }
                if (key == 'name') {
                    valueAxis.id = value;
                    graph.valueAxis = value;
                    graph.valueField = value;
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

    var configChart = function () {
        var chart = new AmCharts.AmPieChart();
        chart.responsive = {
            "enabled": true,
            "rules": [{
                "overrides": {
                    "legend": {
                        "enabled": false
                    }
                }
            }]
        };
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

    var configChart = function () {
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
    if ($('.wrap-create-camp').length) {
        var create_camp_top = $('.wrap-create-camp').offset().top;
        $(window).on('load resize', function () {
            if (Modernizr.mq('(min-width: 1200px)')) {
                mySticky('.main-content .selected-box', {
                    offset: create_camp_top,
                    right: 50
                });
            } else {
                mySticky('.main-content .selected-box', -1);
            }
        });
    }
}

function addJs(links, idx) {
    var body = document.getElementsByTagName('body')[0];
    if (typeof idx === 'undefined') {
        links.forEach(function (link, index) {
            var tag = document.createElement('script');
            tag.src = link;
            body.appendChild(tag);
        });
    } else {
        var tags = document.querySelectorAll('[data-id="' + idx + '"]');
        if (tags.length === 0) {
            links.forEach(function (link, index) {
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
    $.getMultiScripts(links, path).done(function () {
        callback();
    });
}

function addCss(links, idx) {
    var head = document.getElementsByTagName('head')[0];
    if (typeof idx === 'undefined') {
        links.forEach(function (link, index) {
            var tag = document.createElement('link');
            tag.src = link;
            head.appendChild(tag);
        });
    } else {
        var tags = document.querySelectorAll('[data-id="' + idx + '"]');
        if (tags.length === 0) {
            links.forEach(function (link, index) {
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
    $.each(selectors, function (idx, selector) {
        if ($(selector).length) {
            $(selector).mCustomScrollbar(options);
        }
    });
}

function myScrollbar2(selectors, options) {
    if (typeof selectors === 'string') {
        selectors = [selectors];
    }
    if (typeof options === 'undefined') {
        options = null;
    }
    $.each(selectors, function (idx, selector) {
        if ($(selector).length) {
            $(selector).perfectScrollbar(options);
        }
    });
}

function completePage() {
    if ($('.complete-page').length) {
        $(document).on('click', '.wrap-complete-create-campaign .distribution-type input[type="radio"]', function () {
            if (this.checked) {
                if ($(this).val() == 2) {
                    $('.distribution-manually').removeClass('hidden');
                    $(this).parent().addClass('hidden');
                    $('.return-link').removeClass('hidden');
                }
            }
        });
        $(document).on('click', '.wrap-complete-create-campaign .return-link', function () {
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
        var tl3 = new TimelineMax({
            paused: true
        });
        tl1
        // .to(complete_rocket, 1.5, {
        //     bottom: '35%',
        //     y: 0,
        //     ease: Expo.easeOut
        // }, 1)
        // .from(complete_message, 0.6, {
        //     autoAlpha: 0,
        //     y: 100,
        //     ease: Power1.easeIn
        // }, '-=1.2')
        // .to(complete_rocket, 0.8, {
        //     bottom: '100%',
        //     y: 0,
        //     ease: Expo.easeIn
        // }, '+=0.8')
        // .to(complete_message, 0.6, {
        //     autoAlpha: 0,
        //     y: 100,
        //     ease: Power1.easeOut
        // }, '-=0.4')
            .fromTo(complete_content, 1, {
                scale: 0
            }, {
                scale: 1,
                ease: Back.easeOut.config(1)
            }, '-=0.2');
        tl3
            .to(complete_content, 0.6, {
                autoAlpha: 0,
                ease: Sine.easeOut
            })
            .to(complete_rocket, 1.5, {
                bottom: '35%',
                y: 0,
                ease: Expo.easeOut
            }, '-=0.2')
            .to(complete_message, 0.6, {
                autoAlpha: 1,
                y: 0,
                ease: Power1.easeIn
            }, '-=1.2');
        $(document).on('click', '.wrap-complete-create-campaign .finish-btn', function () {
            tl3.play();
        });
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
        var clipboard = new Clipboard(selector);
        clipboard.on('success', function (e) {
            addLoading('Sao chép thành công', true);
            setTimeout(function () {
                removeLoading();
            }, 1000);
            e.clearSelection();
        });

    }
}

function myModal(selector, options) {
    if (options === null || typeof options == 'undefined') {
        options = 'show';
    }
    if ($(selector).length) {
        $(selector).modal(options);
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
    $(document).on('mouseup', 'body', function (event) {
        if (!$(selector).is(event.target) && $(selector).has(event.target).length === 0) {
            callback();
        }
    });
}

function tableResponsiveFixScrollbar() {
    if ($('.table-responsive').length) {
        $(window).on('load resize scroll', function () {
            fixedScrollbar(true);
        });
    }
}

function fixedScrollbar(more) {
    var h_arr = [];
    h_arr['h1'] = $(window).height() - ($('.table-responsive').offset().top - $(window).scrollTop());
    h_arr['h2'] = $('.table-responsive .table').height() - ($(window).height() - ($('.table-responsive').offset().top - $(window).scrollTop()));
    if (more) {
        if (h_arr.h1 < $('.table-responsive .table').height()) {
            $('.table-responsive').css({
                'margin-bottom': h_arr.h2,
                'height': h_arr.h1
            });
        } else {
            $('.table-responsive').css({
                'margin-bottom': 0,
                'height': 'auto'
            });
        }
    } else {
        $('.table-responsive').css({
            'margin-bottom': h_arr.h2,
            'height': h_arr.h1
        });
    }
}

function renderToggleColumnSelection(arr) {
    $.each(arr, function (i, v) {
        var status = (v.status === 'checked') ? 'data-status="checked"' : '';
        var str = '<option value="' + v.value + '" ' + status + '>' + v.name + '</option>';
        $('.wrap-toggle-column .toggle-column-select').append(str);
    });
    myFancySelect('.toggle-column-select', {
        optionsClass: 'has-label',
        onlyCloseOutside: true,
        holdPlaceholder: true,
        actionBtn: 'Áp dụng',
        optionTemplate: function (optionEl) {
            var val = optionEl.val();
            return "<input type='checkbox' id='toggle-column-" + val + "' class='css-checkbox-2' value='" + val + "' " + optionEl.data('status') + " /><label for='toggle-column-" + val + "' class='css-label-2'>" + optionEl.text() + "</label>";
        }
    });
}

function tableScripts() {
    if ($('.wrap-bb-table').length) {
        $(window).on('load resize', function () {
            responsiveTableWidth();
        });
        $(window).on('load resize scroll', function () {
            fixedTableHeader();
            stickyScroll();
        });
        // checkboxTable();
    }
}

function tableCellExtraWidth(container_table_width, table_width) {
    var extra_width = container_table_width > table_width ? (container_table_width - table_width) / $('.bb-table .bb-table-header:visible').length : 0;
    return Math.ceil(extra_width);
}

function tableWidth(selector) {
    var table_width = 0;
    $(selector + ' .bb-table-header:visible').each(function () {
        table_width += $(this).data('width');
    });
    return table_width;
}

function arrayCellWidth(cell_width_extra) {
    if (cell_width_extra === null || typeof cell_width_extra == 'undefined') {
        cell_width_extra = 0;
    }
    var obj = {
        arr_cell_width: [],
        total: 0
    };
    $('.bb-table .bb-table-header').each(function () {
        var cell_width = 0;
        if ($(this).css('display') === 'table-cell') {
            cell_width = $(this).data('width') + cell_width_extra;
        } else {
            cell_width = 0;
        }
        obj.arr_cell_width.push(cell_width);
        obj.total += cell_width;
    });
    return obj;
}

var arr_cell_width_tmp = [];
var cell_extra_width_tmp = 0;
var obj_cell_width = null;
var total_cell_width = 0;
function responsiveTableWidth(recalculate, selector) {
    selector = selector || '.bb-table';
    if (recalculate === null || typeof recalculate == 'undefined') {
        recalculate = true;
    }
    var container_table_width = $(selector + ':visible').parent().width() - 1;
    var table_width = tableWidth(selector);

    if (recalculate) {
        cell_extra_width_tmp = tableCellExtraWidth(container_table_width, table_width);
        obj_cell_width = arrayCellWidth(cell_extra_width_tmp);
        arr_cell_width_tmp = obj_cell_width.arr_cell_width;
        total_cell_width = obj_cell_width.total;
    }

    if (container_table_width > table_width) {
        $(selector + ', ' + selector + ' .bb-table-group, ' + selector + ' .bb-table-group-details').css('width', container_table_width);
        if (total_cell_width > container_table_width) {
            var max_value_index = arr_cell_width_tmp.indexOf(Math.max.apply(Math, arr_cell_width_tmp));
            arr_cell_width_tmp[max_value_index] = arr_cell_width_tmp[max_value_index] - (total_cell_width - container_table_width);
        }
    } else {
        $(selector + ', ' + selector + ' .bb-table-group, ' + selector + ' .bb-table-group-details').css('width', table_width);
    }

    tableCellWidth(selector + ' .bb-table-header', arr_cell_width_tmp);
    tableCellWidth(selector + ' .bb-table-cell', arr_cell_width_tmp);
    tableCellWidth(selector + ' .cell-group', arr_cell_width_tmp);
    tableCellWidth(selector + ' .bb-table-cell-details', arr_cell_width_tmp);
}

function toggleColumnTable(showLoading) {
    if (showLoading === null || typeof showLoading == 'undefined') {
        showLoading = false;
    }
    var arr_col_no_unchecked = [];
    var arr_col_no_checked = [];
    if (showLoading) {
        addLoading('Đang xử lý...');
        $('.bb-table').hide();
        $('.wrap-bb-table div').removeAttr('style');
    }
    $('.wrap-toggle-column input[type="checkbox"]:not(:checked)').each(function () {
        arr_col_no_unchecked.push($(this).val());
    });
    $('.wrap-toggle-column input[type="checkbox"]:checked').each(function () {
        arr_col_no_checked.push($(this).val());
    });
    $.each(arr_col_no_unchecked, function (index, value) {
        $('.bb-table .bb-table-row .bb-table-header:nth-child(' + value + ')').hide();
        $('.bb-table .bb-table-row .bb-table-cell:nth-child(' + value + ')').hide();
        $('.bb-table .bb-table-cell-details:nth-child(' + (value - 8) + ')').hide();
    });
    $.each(arr_col_no_checked, function (index, value) {
        $('.bb-table .bb-table-row .bb-table-header:nth-child(' + value + ')').show();
        $('.bb-table .bb-table-row .bb-table-cell:nth-child(' + value + ')').show();
        $('.bb-table .bb-table-cell-details:nth-child(' + (value - 8) + ')').show();
    });
    if (showLoading) {
        $('.bb-table').show().css('opacity', 0);
        responsiveTableWidth();
        setTimeout(function () {
            $('.bb-table').css('opacity', 1);
            removeLoading();
        }, 500);
    } else {
        responsiveTableWidth();
    }
}

function tableCellWidth(selector, arr_cell_width) {
    $(selector).each(function (index) {
        var colspan = $(this).data('colspan') || 1;
        var offset = parseInt($(this).parent().closest('.cell-group').data('offset') || 0);
        var cell_width = 0;
        var i = $(this).index();
        if (i > 0) {
            var prev_colspan = 0;
            for (var t = 0; t < i; t++) {
                prev_colspan += $(this).parent().find(selector + ':nth-child(' + (t + 1) + ')').data('colspan') || 1;
            }
            i = prev_colspan;
        }
        for (j = offset; j < colspan + offset; j++) {
            cell_width += arr_cell_width[j + i];
        }
        $(this).css('width', cell_width);
    });
}

function tableCellHeight() {
    $('.bb-table .cell-group.has-row').each(function () {
        var this_group_height = $(this).prev('.ads-details').height();
        var count_row = $(this).find('.bb-table-row').length;
        $(this).find('.bb-table-cell-details').css('height', this_group_height / count_row);
    });
}

function stickyScroll() {
    if ($('.wrap-bb-table').length > 0) {
        var h_arr = [];
        h_arr['h1'] = $(window).height() - ($('.wrap-bb-table').offset().top - $(window).scrollTop());
        h_arr['h2'] = $('.wrap-bb-table .bb-table').height() - h_arr['h1'];
        if (h_arr.h1 < $('.wrap-bb-table .bb-table').height()) {
            $('.wrap-bb-table').css({
                'margin-bottom': h_arr.h2,
                'height': h_arr.h1
            });
        } else {
            $('.wrap-bb-table').css({
                'margin-bottom': 0,
                'height': 'auto'
            });
        }
    }
}

function fixCheckboxInTable() {
    $(document).on('click', '.custom-table .css-label', function (e) {
        e.preventDefault();
        $(this).prev().trigger('click');
    });
}

function checkboxTable() {
    $(document).on('click', '.bb-table .css-checkbox[id^="bb-table-chk-"]', function () {
        var this_id = $(this).data('id');
        var this_parent_id = $(this).closest('.bb-table-group').data('parent');
        if (this.checked) {
            if (this_id === 'all') {
                $('.bb-table .css-checkbox[id^="bb-table-chk-"]').prop('checked', true);
            } else {
                $('[data-parent="' + this_id + '"] .css-checkbox[id^="bb-table-chk-"]').prop('checked', true);
                if ($('[data-parent="' + this_parent_id + '"] .css-checkbox[id^="bb-table-chk-"]:checked').length === $('[data-parent="' + this_parent_id + '"] .css-checkbox[id^="bb-table-chk-"]').length) {
                    $('[data-id="' + this_parent_id + '"] .css-checkbox[id^="bb-table-chk-"]').prop('checked', true);
                }
                if ($('.bb-table .css-checkbox[id^="bb-table-chk-"]:checked').length === ($('.bb-table .css-checkbox[id^="bb-table-chk-"]').length - 1)) {
                    $('.bb-table .css-checkbox[id="bb-table-chk-all"]').prop('checked', true);
                }
            }
        } else {
            if (this_id === 'all') {
                $('.bb-table .css-checkbox[id^="bb-table-chk-"]').prop('checked', false);
            } else {
                $('[data-parent="' + this_id + '"] .css-checkbox[id^="bb-table-chk-"]').prop('checked', false);
                $('[data-id="' + this_parent_id + '"] .css-checkbox[id^="bb-table-chk-"]').prop('checked', false);
                $('.bb-table .css-checkbox[id="bb-table-chk-all"]').prop('checked', false);
            }
        }
    });
}

function collapseTable(reverse) {
    if (reverse) {
        $(document).on('click', '.bb-table .minus-icon', function () {
            var this_row = $(this).closest('.bb-table-row');
            var row_id = this_row.data('id');
            $('.bb-table').find('[data-parent="' + row_id + '"]').addClass('hidden');
            $(this).removeClass('minus-icon').addClass('plus-icon');
            this_row.find('.details').removeClass('opened');
            stickyScroll();
        });
    } else {
        $(document).on('click', '.bb-table .plus-icon', function () {
            var this_row = $(this).closest('.bb-table-row');
            var row_id = this_row.data('id');
            $('.bb-table').find('[data-parent="' + row_id + '"]').removeClass('hidden').adtop_animation('fadeIn');
            $(this).removeClass('plus-icon').addClass('minus-icon');
            this_row.find('.details').addClass('opened');
            if (this_row.hasClass('level-3')) {
                tableCellHeight();
            }
            stickyScroll();
        });
    }
}

function fixedTableHeader() {
    if ($('.wrap-bb-table').length > 0) {
        var scroll_top = $(window).scrollTop();
        var table_top = $('.wrap-bb-table').offset().top;
        if (scroll_top > table_top) {
            var top_value = scroll_top - table_top - 1;
            $('.bb-table-header').css({
                'transform': 'translate(0, ' + top_value + 'px)'
            });
            $('.bb-table-header').parent().addClass('bb-header-fixed');
        } else {
            $('.bb-table-header').css({
                'transform': 'none'
            });
            $('.bb-table-header').parent().removeClass('bb-header-fixed');
        }
    }
}

function openEditCell() {
    $(document).on('click', '.list-campaign .edit-cell .edit-icon', function () {
        var this_cell = $(this).closest('.bb-table-cell');
        this_cell.addClass('editing').removeClass('edit-cell');
        this_cell.find('.wrap-edit').removeClass('hidden');
    });
}

function closeEditCell() {
    $(document).on('click', '.list-campaign .wrap-edit .cancel-link', function () {
        $(this).closest('.bb-table-cell').removeClass('editing').addClass('edit-cell');
        $(this).closest('.wrap-edit').addClass('hidden');
    });
    clickOutSide('.list-campaign .wrap-edit', function () {
        $('.list-campaign .wrap-edit').addClass('hidden').closest('.bb-table-cell').removeClass('editing').addClass('edit-cell');
    });
}

function openEditDetails() {
    $(document).on('click', '.list-campaign .ads-details .edit-link', function () {
        var this_details = $(this).closest('.ads-details');
        this_details.find('.wrap-content-edit').addClass('hidden');
        this_details.find('.wrap-input-edit').removeClass('hidden');
    });
}

function closeEditDetails() {
    $(document).on('click', '.list-campaign .wrap-input-edit .cancel-link', function () {
        var this_details = $(this).closest('.ads-details');
        this_details.find('.wrap-input-edit').addClass('hidden');
        this_details.find('.wrap-content-edit').removeClass('hidden');
    });
}

function openSectionInDetails() {
    $(document).on('click', '.list-campaign .ads-details .action-link', function () {
        var section = $(this).data('section');
        var this_details = $(this).closest('.ads-details');
        var current_section = $(this).closest('.common-section');
        current_section.adtop_animation('fadeOut', function () {
            $(this).addClass('hidden');
            this_details.find('.' + section + '-section').removeClass('hidden').adtop_animation('fadeIn', function () {
                tableCellHeight();
            });
        });
    });
}

function closeSectionInDetails() {
    $(document).on('click', '.list-campaign .ads-details .back-link', function () {
        var this_details = $(this).closest('.ads-details');
        var current_section = $(this).parent();
        current_section.adtop_animation('fadeOut', function () {
            $(this).addClass('hidden');
            this_details.find('.common-section').removeClass('hidden').adtop_animation('fadeIn', function () {
                tableCellHeight();
            });
        });
    });
}

function cellDetails() {
    $(document).on('click', '.bb-table .bb-table-row .details', function () {
        var this_row = $(this).closest('.bb-table-row');
        var row_id = this_row.data('id');
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.bb-table').find('[data-parent="' + row_id + '"]').addClass('hidden');
            this_row.find('.minus-icon').removeClass('minus-icon').addClass('plus-icon');
            if (this_row.hasClass('level-3')) {
                this_row.find('.details').removeClass('opened');
            }
        } else {
            $(this).addClass('opened');
            $('.bb-table').find('[data-parent="' + row_id + '"]').removeClass('hidden').adtop_animation('fadeIn');
            this_row.find('.plus-icon').removeClass('plus-icon').addClass('minus-icon');
            if (this_row.hasClass('level-3')) {
                this_row.find('.details').addClass('opened');
                tableCellHeight();
            }
        }
        responsiveTableWidth(false);
        stickyScroll();
    });
}

function getAllEvents(element) {
    var result = [];
    for (var key in element) {
        if (key.indexOf('on') === 0) {
            result.push(key.slice(2));
        }
    }
    return result.join(' ');
}

function disableSmoothScrolling() {
    document.body.addEventListener('mousewheel', function (evt) {
        evt.preventDefault();
        window.scrollTo(0, window.pageYOffset - evt.wheelDelta);
    });
}

function folderNotificationBox() {
    var selector = $('.list-ads .ads-item.folder');
    if (selector.length > 0) {
        var top_folder = selector.first().position().top + 230;
        $('.folder-notification-box').removeClass('hidden');
        if ($('.wrapper .permutation-overlay').length === 0) {
            $('.wrapper').prepend('<div class="permutation-overlay"></div>');
        }
        alert('add');
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
    }
}

function myListMultiLevel() {
    $(document).on('click', '.list-multi-level .has-child .glyphicon-triangle-right', function () {
        $(this).removeClass().addClass('glyphicon glyphicon-triangle-bottom');
        $(this).closest('.has-child').addClass('open');
    });
    $(document).on('click', '.list-multi-level .has-child .glyphicon-triangle-bottom', function () {
        $(this).removeClass().addClass('glyphicon glyphicon-triangle-right');
        $(this).closest('.has-child').removeClass('open');
    });
    $(document).on('click', '.list-multi-level .has-child input[type="checkbox"]', function () {
        var parent_li = $(this).parent('li');
        var closest_child = $(this).closest('.has-child');
        var checkbox_all = closest_child.children('input[type="checkbox"]');
        if (this.checked) {
            if (parent_li.hasClass('has-child')) {
                parent_li.find('input[type="checkbox"]').each(function () {
                    this.checked = true;
                });
            }
        } else {
            if (parent_li.hasClass('has-child')) {
                parent_li.find('input[type="checkbox"]').each(function () {
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
}

function extractFolder(ele) {
    var id = $(ele).closest('.folder').data('folder');
    var this_list_ads = $(ele).closest('.wrap-list-ads');
    var this_top_create_ads = this_list_ads.prev('.top-create-ads-content');
    this_list_ads.find('.ads-item').addClass('hidden').removeClass('open');
    this_list_ads.find('.ads-item').each(function () {
        if ($(this).data('folder-item') == id) {
            $(this).removeClass('hidden').addClass('open');
        }
    });
    this_top_create_ads.find('.current-folder').removeClass('hidden');
    this_top_create_ads.find('.folder-name').text($(ele).closest('.folder').find('h4').text());
}

function selectAllText(selector) {
    if (selector.length) {
        $(selector).focus(function () {
            var $this = $(this);
            $this.select();
            $this.mouseup(function () {
                $this.unbind("mouseup");
                return false;
            });
        });
    }
}

function chooseCampaignTopStatistic(selector) {
    var this_li = $(selector);
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
}

function convertSvgImageToInlineSvg() {
    $('img.svg').each(function () {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
        $img.show();
    });
}

function previewBoxScripts() {
    $(document).on('click', '.ads-location-section input[type="radio"]', function () {
        var id = $(this).attr('id');
        if (this.checked) {
            if (id === 'ads-location-manual') {
                $('.ads-location-manual-box').removeClass('hidden');
            } else {
                $('.ads-location-manual-box').addClass('hidden');
            }
        }
    });
    $('.device-ads-location-select').select2({
        minimumResultsForSearch: Infinity
    }).on('select2:select', function (e) {
        var type = $(e.currentTarget).val();
        if (type === 'all') {
            $(".list-basis .basis-item").removeClass('hidden');
        } else {
            $(".list-basis .basis-item").addClass('hidden');
            $(".list-basis .basis-item").each(function () {
                var li_type = $(this).data('type').split(' ');
                if ($.inArray(type, li_type) > -1) {
                    $(this).removeClass('hidden');
                }
            });
        }
    });
    $('.ads-location-manual-box').on({
        mouseenter: function () {
            $(this).find('.preview-box').addClass('open');
            if ($(this).hasClass('audience-network')) {
                $('.list-basis .preview-slider').not('.slick-initialized').slick({
                    dots: true,
                    arrows: false,
                    infinite: true,
                    fade: true,
                    autoplay: false,
                    speed: 1000
                });
            }
        },
        mouseleave: function () {
            $(this).find('.preview-box').removeClass('open');
        }
    }, '.list-basis li');
}

function multiItemPreview() {
    $('.create-ads-header .sub-tabs a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $('.preview-multi-item .preview-slider').not('.slick-initialized').slick({
            arrows: true,
            infinite: true,
            centerMode: true,
            centerPadding: '90px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            speed: 1000
        });
    });
}