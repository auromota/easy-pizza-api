app.controller('clientAccessController', ['$scope', '$location', function ($scope, $location) {

    console.log($location.search());

    $scope.facebook = function () {
        window.location.href = '../auth/facebook';
    }

}]);