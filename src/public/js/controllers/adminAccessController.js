app.controller('adminAccessController', ['$scope', 'LoginService', '$state',
    function ($scope, LoginService, $state) {

        $scope.user = {};

        $scope.login = function () {
            LoginService.loginAdmin($scope.user).then(function (result) {
                LoginService.registerAdmin(result.data.token);
                $state.go('admin.dashboard');
            }, function (err) {
                console.log(err);
            });
        }

        $scope.logout = function () {
            LoginService.unregisterAdmin();
            $state.go('login.admin');
        }

    }
]);