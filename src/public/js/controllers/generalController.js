app.controller('generalController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (toState.data) {
                var isProtectedAdmin = toState.data.authorizationAdmin;
                var isProtectedClient = toState.data.authorizationClient;
                if (isProtectedAdmin && !LoginService.isAdminAuthenticated()) {
                    event.preventDefault();
                    $state.go('login.admin');
                }
                if (isProtectedClient && !LoginService.isClientAuthenticated()) {
                    event.preventDefault();
                    $state.go('login.client');
                }
            }
        });
    }
]);