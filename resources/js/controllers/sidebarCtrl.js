var app = angular.module('sunhorizonenergy');


app.controller('sidebarCtrl', function ($scope) {
    $scope.printPage = function () {
        window.print();
    }
})