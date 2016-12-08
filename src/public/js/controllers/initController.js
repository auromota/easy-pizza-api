app.controller('initController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $scope.client = function () {
            if (LoginService.isClientAuthenticated()) {
                if (LoginService.isTableSet()) {
                    $state.go('client.orders');
                } else {
                    $state.go('table');
                }
            } else {
                $state.go('login.client');
            }
        };

        $scope.admin = function () {
            if (LoginService.isAdminAuthenticated()) {
                $state.go('admin.dashboard');
            } else {
                $state.go('login.admin');
            }
        }
    }
]);