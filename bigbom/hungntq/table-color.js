jQuery.fn.tableColor = function(data, options) {

    // Default settings
    var defaults = {
        tableClass: 'tableColor',
        tableHeadClass: 'tableHead',
        textDay: {
            2: 'Thứ Hai',
            3: 'Thứ Ba',
            4: 'Thứ Tư',
            5: 'Thứ Năm',
            6: 'Thứ Sáu',
            7: 'Thứ Bảy',
            8: 'Chủ Nhật'
        }
    };
    var settings = $.extend( {}, defaults, options );
 
    return this.each(function() {

        var tableHTML = '';
        tableHTML += '<div class="' + settings.tableHeadClass + '">';
        tableHTML += '<label></label>';
        for (var i = 0; i < 24; i++) {
            tableHTML += '<a>' + i + 'h</a>';
        }
        tableHTML += '</div>';

        $.each(settings.textDay, function(key, value){
            tableHTML += '<div data-day="' + key + '">';
            for (var j = 0; j < 25; j++) {
                if (j === 0) {
                    tableHTML += '<label>' + value + '</label>';
                } else {
                    var colorCode = '';
                    if (typeof settings.colors !== 'undefined') {
                        var value = 0;
                        var idx = j - 1;
                        if (typeof data[key] !== 'undefined' && typeof data[key][idx] !== 'undefined') {
                            value = data[key][idx];
                        }
                        for (var color in settings.colors) {
                            var conditions = settings.colors[color];
                            for (var condition in conditions) {
                                var condValue = conditions[condition];
                                if (condition === 'range') {
                                    if (value >= condValue[0] && value < condValue[1]) {
                                        colorCode = color;
                                        break;
                                    }
                                } else {
                                    var chk = eval('value' + condition + condValue + ';');
                                    if (chk) {
                                        colorCode = color;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    if (colorCode !== '') {
                        var match = colorCode.match(/^\.([a-z0-9]+)$/i);
                        if (match) {
                            tableHTML += '<a class="' + match[1] + '" title="' + value + '"></a>';
                        } else {
                            tableHTML += '<a style="background-color:' + (/^[0-9A-F]{3,6}$/i.test(colorCode) ? '#' + colorCode : colorCode) + '" title="' + value + '"></a>';
                        }
                    } else {
                        tableHTML += '<a title="' + value + '"></a>';
                    }
                }
            }
            tableHTML += '</div>';
        });

        $(this).addClass(settings.tableClass).html(tableHTML);

        return this;
    });
 
};