var app = angular.module('sunhorizonenergy');


app.directive('mysidebar', function () {
    return {
        restrict: 'E',
        templateUrl: 'resources/html/sidebar.html'
    }
})