app.controller('clientMenuController', ['$scope', '$state', 'LoginService',
    function ($scope, $state, LoginService) {

        $scope.logout = function () {
            LoginService.unregisterClient();
            $state.go('login.client');
        }

    }
]);