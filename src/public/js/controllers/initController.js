app.controller('initController', ['$scope', 'Login', '$state', function ($scope, Login, $state) {

    $scope.client = function () {
        $state.go('login.client');
    };

    $scope.admin = function () {

    }

}]);