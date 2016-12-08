app.controller('clientMenuController', ['$scope', '$state', 'LoginService', 'Order',
    function ($scope, $state, LoginService, Order) {

        $scope.logout = function () {
            LoginService.unregisterClient();
            $state.go('login.client');
        }

    }
]);