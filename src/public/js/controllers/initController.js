app.controller('initController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $scope.client = function () {
            $state.go('login.client');
        };

        $scope.admin = function () {
            $state.go('login.admin');
        }
    }
]);