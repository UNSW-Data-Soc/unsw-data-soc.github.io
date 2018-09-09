$(document).ready(function () {
    'use strict';

    function initialize() {
      $(".cp-map").each(function (index) {

        //Taking data attribute from map wrapper
        var mapLat = parseFloat($(this).data('lat'));
        var mapLng = parseFloat($(this).data('lng'));
        var mapZoom = parseInt($(this).data('zoom'));
        var mapType = $(this).data('maptype');

        //Processing wrapper data attribute to coordinate
        var mapOptions = {
          center: {
            lat: mapLat,
            lng: mapLng
          },
          zoom: mapZoom,
          mapTypeId: mapType,
          scrollwheel: false,
          styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
        };

        //Initiating map
        var map = new google.maps.Map(this, mapOptions);

        //Map Marker
        var marker = new google.maps.Marker({
          position: {
            lat: 40.713355,
            lng: -74.005535
          },
          map: map,
          icon: 'images/map-marker.png'
        });
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $('#mapTab li a').on('shown.bs.tab', function (e) {
        initialize();
    });
});