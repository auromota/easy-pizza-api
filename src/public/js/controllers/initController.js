app.controller('initController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $scope.client = function () {
            if (LoginService.isClientAuthenticated()) {
                $state.go('client.dashboard');
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