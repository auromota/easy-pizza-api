app.controller('adminAccessController', ['$scope', 'LoginService', '$state',
    function ($scope, LoginService, $state) {

        $scope.user = {};

        $scope.login = function () {
            LoginService.login($scope.user).then(function (result) {
                LoginService.register(result.data.token);
                $state.go('admin.dashboard');
            }, function(err) {
                console.log(err);
            });
        }

    }
]);