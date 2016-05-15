var app = angular.module('sunhorizonenergy');


app.controller('contactCtrl', function($scope) {
        $scope.initMap = function () {
        var myLatLng = {
            lat: 40.288175,
            lng: -111.693569
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: $scope.map,
            title: 'sunHorizonEnergy'
        });
    }

    $scope.initMap();
})