app.controller('adminMenuController', ['$scope', '$state', 'LoginService',
    function ($scope, $state, LoginService) {

        $scope.logout = function () {
            LoginService.unregisterAdmin();
            $state.go('login.admin');
        }

    }]
);