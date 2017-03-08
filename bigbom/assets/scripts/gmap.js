var positionDefault = {
    lat: 10.7989522,
    lng: 106.6848037
};

function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: positionDefault,
        zoom: 15,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var marker = new google.maps.Marker({
        position: positionDefault,
        map: map,
        draggable: true,
        title: ''
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('googleMapSearch');
    if (input !== null) {
        var searchBox = new google.maps.places.SearchBox(input);
        // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                var icon = {
                    //url: '',
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location,
                    draggable: true
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);

            /* Lấy dữ liệu địa chỉ và vĩ độ - kinh độ */
            //$('#address').val(input.value).data('origin', true);
            //$('#geo_latitude').val(bounds.O.O).data('origin', true);
            //$('#geo_longitude').val(bounds.j.j).data('origin', true);
        });
    }

    // Sự kiện drag
    google.maps.event.addListener(marker, 'drag', function(e) {
        //$('#geo_latitude').val(e.latLng.lat()).data('origin', true);
        //$('#geo_longitude').val(e.latLng.lng()).data('origin', true);
    });

    // Sự kiện dragend
    google.maps.event.addListener(marker, 'dragend', function(e) {
        //$('#geo_latitude').val(e.latLng.lat()).data('origin', true);
        //$('#geo_longitude').val(e.latLng.lng()).data('origin', true);
    });

}