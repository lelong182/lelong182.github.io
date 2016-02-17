(function($) {

    "use strict";

    function myBloodhound(type, hasParent, isRemote) {
        var url = '',
            typeahead_elem = null,
            list_suggestion = null,
            empty_str = '',
            obj_return = null,
            is_localtion = false,
            is_device = false,
            bh_params = {};
        switch (type) {
            case 'device':
                typeahead_elem = $('#device-search');
                empty_str = 'Không tìm thấy thiết bị nào.';
                is_device = true;
                obj_return = function(item) {
                    return {
                        id: item.key,
                        name: item.name,
                        platform: item.platform
                    }
                };
                break;
            case 'device-android':
                typeahead_elem = $('#device-search');
                empty_str = 'Không tìm thấy thiết bị nào.';
                is_device = true;
                obj_return = function(item) {
                    return {
                        id: item.key,
                        name: item.name,
                        platform: item.platform
                    }
                };
                break;
            case 'device-ios':
                typeahead_elem = $('#device-search');
                empty_str = 'Không tìm thấy thiết bị nào.';
                is_device = true;
                obj_return = function(item) {
                    return {
                        id: item.key,
                        name: item.name,
                        platform: item.platform
                    }
                };
                break;
            case 'interest':
                typeahead_elem = $('#interest-search');
                empty_str = 'Không tìm thấy sở thích nào.';
                obj_return = function(item) {
                    return {
                        id: item.id,
                        name: item.name,
                        path: item.path
                    }
                };
                break;
            case 'behavior':
                typeahead_elem = $('#behavior-search');
                empty_str = 'Không tìm thấy hành vi nào.';
                obj_return = function(item) {
                    return {
                        id: item.id,
                        name: item.name,
                        path: item.path
                    }
                };
                break;
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
                is_localtion = true;
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
        typeahead_elem.bind('typeahead:select', function(ev, suggestion) {
            if ($('.list-selected-' + type).hasClass('hidden')) {
                $('.list-selected-' + type).removeClass('hidden');
            }
            if (hasParent) {
                if (is_localtion) {
                    html = '<div class=\"selected-item\" data-id=\"' + suggestion.id + '\"><div class=\"has-parent\"><span>' + suggestion.country + '</span><h4>' + suggestion.name + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div></div>';
                } else {
                    var length_path = suggestion.path.length;
                    var html = "";
                    if (length_path > 1) {
                        var path = suggestion.path;
                        path.pop();
                        path = path.join(" > ");
                        html = '<div class=\"selected-item\" data-id=\"' + suggestion.id + '\"><div class=\"has-parent\"><span>' + path + '</span><h4>' + suggestion.name + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div></div>';
                    } else {
                        html = '<div class=\"selected-item\" data-id=\"' + suggestion.id + '\"><h4>' + suggestion.name + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div>';
                    }
                }
            } else {
                if(is_device) {
                    html = '<div class=\"selected-item\" data-id=\"' + suggestion.id + '\" data-platform=\"' + suggestion.platform + '\"><h4>' + suggestion.name + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div>';
                } else {
                    html = '<div class=\"selected-item\" data-id=\"' + suggestion.id + '\"><h4>' + suggestion.name + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div>';
                }
            }
            $('.list-selected-' + type).prepend(html);
            typeahead_elem.typeahead('val', '');
        });
        typeahead_elem.bind('typeahead:render ', function() {
            $('.tt-dataset .' + type).each(function() {
                var this_item = $(this);
                $('.list-selected-' + type + ' .selected-item').each(function() {
                    if (this_item.data('id') == $(this).data('id')) {
                        this_item.remove();
                        if ($('.tt-dataset .' + type).length == 0) {
                            $('.list-selected-' + type).next().find('.tt-dataset').html('<div class="noitems">' + empty_str + '</div>');
                        }
                    }
                });
            });
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
        $('.list-all-' + type).on('click', 'li', function(e) {
            e.stopPropagation();
            if ($(this).children('ul').length) {
                var this_children = $(this).children('i');
                if ($(this).hasClass('open')) {
                    this_children.removeClass().addClass('glyphicon glyphicon-triangle-right');
                    $(this).removeClass('open');
                } else {
                    this_children.removeClass().addClass('glyphicon glyphicon-triangle-bottom');
                    $(this).addClass('open');
                }
            } else {
                var html = '';
                if ($('.list-selected-' + type).hasClass('hidden')) {
                    $('.list-selected-' + type).removeClass('hidden');
                }
                var path = [];
                $(this).parents('li').each(function() {
                    var tmp = $(this).clone();
                    tmp.children('ul').remove();
                    path.push(tmp.text());
                });
                var id = $(this).data('id');
                var text = $(this).text();
                if (hasParent) {
                    var length_path = path.length;
                    if (length_path > 1) {
                        path.reverse();
                        path = path.join(" > ");
                        html = '<div class=\"selected-item\" data-id=\"' + id + '\"><div class=\"has-parent\"><span>' + path + '</span><h4>' + text + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div></div>';
                    } else {
                        html = '<div class=\"selected-item\" data-id=\"' + id + '\"><h4>' + text + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div>';
                    }
                } else {
                    html = '<div class=\"selected-item\" data-id=\"' + id + '\"><h4>' + text + '</h4><span class=\"close-icon\"><i class=\"fa fa-times\"></i></span></div>';
                }
                $('.list-selected-' + type).prepend(html);
                $('.list-all-' + type).removeClass('visible');
                $(this).hide();
            }
        });
    }

    $(document).ready(function() {

        if ($('.wrap-ads-info').length) {
            myBloodhound('device-android');
            myBloodhound('interest', true);
            myBloodhound('behavior', true);
            myBloodhound('language');
            myBloodhound('location', true, false);
            myListAll('interest', true);
            myListAll('behavior', true);
            myListAll('language');

            /* =================================
             ===  Devices                 ====
             =================================== */
            $('.main').on('click', '.wrap-device-type input', function() {
                var type = $(this).attr('id');
                var input_checked = $('.wrap-device .wrap-device-type input:checked').length;
                var wrap_device_type = $(this).parent('.wrap-device-type');
                var list_android_version = '<div class="form-group wrap-device-version"><select class="custom-select"><option value="">Chọn phiên bản</option><option value="2.0">2.0</option><option value="2.1">2.1</option><option value="2.2">2.2</option><option value="2.3">2.3</option><option value="3.0">3.0</option><option value="3.1">3.1</option><option value="3.2">3.2</option><option value="4.0">4.0</option><option value="4.1">4.1</option><option value="4.2">4.2</option><option value="4.3">4.3</option><option value="4.4">4.4</option><option value="5.0">5.0</option><option value="5.1">5.1</option><option value="6.0">6.0</option></select></div>';
                var list_ios_version = '<div class="form-group wrap-device-version"><select class="custom-select"><option value="">Chọn phiên bản</option><option value="2.0">2.0</option><option value="3.0">3.0</option><option value="4.0">4.0</option><option value="4.3">4.3</option><option value="5.0">5.0</option><option value="6.0">6.0</option><option value="7.0">7.0</option><option value="7.1">7.1</option><option value="8.0">8.0</option><option value="8.1">8.1</option><option value="8.2">8.2</option><option value="8.3">8.3</option><option value="8.4">8.4</option><option value="9.0">9.0</option><option value="9.1">9.1</option></select></div>';
                if (this.checked) {
                    if (input_checked == 2) {
                        wrap_device_type.next('.wrap-device-version').remove();
                        myBloodhound('device');
                    } else if (type == 'android') {
                        wrap_device_type.after(list_android_version);
                        myBloodhound('device-android');
                    } else if (type == 'ios') {
                        wrap_device_type.after(list_ios_version);
                        myBloodhound('device-ios');
                    }
                } else {
                    if (input_checked == 0) {
                        wrap_device_type.next('.wrap-device-version').remove();
                        myBloodhound('device');
                    } else if (type == 'android') {
                        wrap_device_type.after(list_ios_version);
                        myBloodhound('device-ios');
                    } else if (type == 'ios') {
                        wrap_device_type.after(list_android_version);
                        myBloodhound('device-android');
                    }
                }
                $('.custom-select').fancySelect();
            });

            /* =================================
             ===  Country                 ====
             =================================== */
            $('.main').on('click', '.wrap-country-select .options li', function() {
                var country_code = $(this).data('raw-value');
                var tz_text = "";
                $.each(listTimezones[country_code], function(k, value) {
                    tz_text += '<option value=\"' + value + '\">' + value + '</option>';
                });
                if ($('.wrap-timezones-select').length) {
                    $('.wrap-country-select').parent().next().find('.wrap-timezones-select').html('<select class=\"timezones-select\">' + tz_text + '</select>');
                } else {
                    $('.wrap-country-select').parent().after('<div class=\"col-sm-3\"><div class=\"wrap-timezones-select\"><select class=\"timezones-select\">' + tz_text + '</select></div></div>');
                }
                $('.timezones-select').fancySelect({
                    optionTemplate: function(optionEl) {
                        return '<span data-utc=\"' + optionEl.data('utc') + '\" data-local=\"' + optionEl.data('local') + '\">' + optionEl.text() + '</span>';
                    }
                });
                $('.wrap-timezones-select .options li:first-child').trigger('click');
            });
            $('.main').on('click', '.wrap-timezones-select .options li', function() {
                var timeZone = $(this).text();
                $.ajax({
                    url: params.campaignJsonURL + '?type=time',
                    type: 'POST',
                    dataType: 'json',
                    data: {timezone: timeZone},
                    success: function(res) {
                        $('.timezone-utc').text(res.data.utc);
                        $('.timezone-local').text(res.data.local);
                    }
                });
            });
        }

    });
})(window.jQuery);