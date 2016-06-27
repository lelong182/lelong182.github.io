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

})(window.jQuery);

function myMinimalMenu() {
    $('.minimal-menu').before('<label class=\"minimal-menu-button\" for=\"mobile-nav\"><span>Menu</span></label><input class=\"minimal-menu-button\" type=\"checkbox\" id=\"mobile-nav\" name=\"mobile-nav\" />');
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
    $('.minimal-menu').find('ul.sub-menu').before('<input class=\"show-submenu\" type=\"checkbox\" />');
    $(document).on('click', '.minimal-menu-button', function() {
        $(this).toggleClass('active');
    });
    $(document).on('mouseup', 'body', function(event) {
        if (!$('.minimal-menu').is(event.target) && $('.minimal-menu').has(event.target).length === 0 && !$('.minimal-menu-button').is(event.target)) {
            $('.minimal-menu-button[type="checkbox"]').prop('checked', false);
        }
    });
}

function myFancybox(selector, type) {
    if ($(selector).length) {
        $(selector).fancybox({
            type: type,
            padding: 0,
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0, 0, 0, 0.85)'
                    }
                }
            },
            onUpdate: function() {
                var posXY = '';
                $('.fancybox-skin').draggable({
                    axis: "x",
                    drag: function(event, ui) {
                        posXY = ui.position.left;
                        if (posXY > 50) {
                            return false;
                        }
                        if (posXY < -50) {
                            return false;
                        }
                    },
                    stop: function() {
                        if (posXY > 45) {
                            $.fancybox.prev();
                        }
                        if (posXY < -45) {
                            $.fancybox.next();
                        }
                    }
                });
            }
        });
    }
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

function loadScript() {
    var script = document.createElement("script");
    script.src = "//maps.googleapis.com/maps/api/js?callback=initialize";
    document.body.appendChild(script);
}

function loadmap(title, lat, lon) {
    google.maps.event.addDomListener(window, 'load', initialize(title, lat, lon));
}

function initialize(title, lat, log) {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(lat, log),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: true,
        draggable: true
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, log),
        map: map,
        title: title
    });
}