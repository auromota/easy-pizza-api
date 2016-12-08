app.controller('clientAccessController', ['$scope', '$location', '$state', 'LoginService',
    function ($scope, $location, $state, LoginService) {

        let token = $location.search().token;
        if (token) {
            LoginService.registerClient(token);
            $state.go('table');
        }

        $scope.facebook = function () {
            window.location.href = '../auth/facebook';
        }

    }]
);