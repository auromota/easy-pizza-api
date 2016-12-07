app.controller('generalController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (toState.data) {
                var isProtected = toState.data.authorization;
                if (isProtected && !LoginService.isAdminAuthenticated()) {
                    event.preventDefault();
                    $state.go('login.admin');
                }
            }
        });
    }
]);