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

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    window.loading_screen = window.pleaseWait({
        logo: "assets/images/logo.png",
        backgroundColor: '#ecf0f1',
        loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
    });

    $(window).on('load', function() {
        window.loading_screen.finish();
        $('body').css('opacity', 1);
    });

    $(document).ready(function() {

        /* =================================
        ===  Minimal Menu                 ====
        =================================== */
        $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
        $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
        $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');


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
        if ($('.custom-select').length) {
            $('.custom-select').fancySelect();
        }


        /* =================================
         ===  Custom Carousel                 ====
         =================================== */
        if ($('.list-items').length) {
            $('.list-items').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, {
                    breakpoint: 858,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true
                    }
                }]
            });
            $(this).on('mouseover', '.list-items .item', function() {
                $(this).addClass('open');
            });
            $(this).on('mouseout', '.list-items .item', function() {
                $('.list-items .item').removeClass('open');
            });
        }


        /* =================================
         ===  Dashboard                 ====
         =================================== */
        if ($('.dashboard').length) {
            myChart('chart-1', {
                chartData: [{
                    'year': '2012',
                    'Income': 24.8,
                    'Expenses': 17.5
                }, {
                    'year': '2013',
                    'Income': 30.1,
                    'Expenses': 23.9
                }, {
                    'year': '2014',
                    'Income': 29.5,
                    'Expenses': 25.1
                }, {
                    'year': '2015',
                    'Income': 24.6,
                    'Expenses': 25
                }, {
                    'year': '2016',
                    'Income': 21.3,
                    'Expenses': 20
                }],
                arrFields: [{
                    name: 'Income',
                    color: '#95a5a6'
                }, {
                    name: 'Expenses',
                    color: '#34495e'
                }]
            });
        }


    });
})(window.jQuery);

function myChart(chartId, opts) {
    if (opts == null) {
        opts = {};
    }
    var settings = $.extend({
        chartData: [],
        arrFields: []
    }, opts);

    var configChart = function() {
        var chart = new AmCharts.AmSerialChart();
        chart.startDuration = 1;
        chart.autoMarginOffset = 0;
        chart.marginTop = 10;
        chart.marginRight = 10;
        chart.marginBottom = 0;
        chart.marginLeft = 0;
        chart.dataProvider = settings.chartData;
        chart.categoryField = "year";
        chart.rotate = true;
        chart.language = 'vi';
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
            "enabled": true
        }

        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridPosition = 'start';
        categoryAxis.position = 'left';
        categoryAxis.gridPosition = true;
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

        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.axisColor = "#cccccc";
        valueAxis.position = "top";
        valueAxis.axisAlpha = 0;
        chart.addValueAxis(valueAxis);

        for (var i = 0; i < settings.arrFields.length; i++) {
            var graph = new AmCharts.AmGraph();
            graph.fillAlphas = 0.8;
            graph.lineAlpha = 0.2;
            graph.type = 'column';
            graph.negativeLineColor = "#e74c3c";
            var balloonTextTmp = '[[value]]';
            $.each(settings.arrFields[i], function(key, value) {
                if (key == 'name') {
                    graph.valueField = value;
                    balloonTextTmp = value.capitalizeFirstLetter() + ": " + balloonTextTmp;
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

        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorPosition = "mouse";
        chartCursor.pan = true;
        chartCursor.categoryBalloonColor = '#3498db';
        chartCursor.cursorColor = '#3498db';
        // chartCursor.valueLineEnabled = true;
        // chartCursor.valueLineBalloonEnabled = true;
        chart.addChartCursor(chartCursor);

        var chartScrollbar = new AmCharts.ChartScrollbar();
        chartScrollbar.dragIconWidth = 18;
        chartScrollbar.scrollbarHeight = 5;
        chartScrollbar.backgroundAlpha = 0.1;
        chartScrollbar.backgroundColor = "#868686";
        chartScrollbar.selectedBackgroundColor = "#3498db";
        chartScrollbar.selectedBackgroundAlpha = 1;
        chartScrollbar.offset = 20;
        chart.addChartScrollbar(chartScrollbar);

        chart.write(chartId);
    };

    if (AmCharts.isReady) {
        configChart();
    } else {
        AmCharts.ready(configChart);
    }
}