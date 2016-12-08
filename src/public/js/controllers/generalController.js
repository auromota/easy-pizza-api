app.controller('generalController', ['$scope', '$rootScope', 'LoginService', '$state',
    function ($scope, $rootScope, LoginService, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            if (toState.data) {
                var isProtectedAdmin = toState.data.authorizationAdmin;
                var isProtectedClient = toState.data.authorizationClient;
                var isProtectedTable = toState.data.authorizationTable;
                var tableNotSet = toState.data.tableNotSet;
                if (isProtectedAdmin && !LoginService.isAdminAuthenticated()) {
                    event.preventDefault();
                    $state.go('login.admin');
                }
                if (isProtectedClient && !LoginService.isClientAuthenticated()) {
                    event.preventDefault();
                    $state.go('login.client');
                }
                if (isProtectedTable && !LoginService.isTableSet()) {
                    event.preventDefault();
                    $state.go('table');
                }
                if (tableNotSet && LoginService.isTableSet()) {
                    event.preventDefault();
                    if (LoginService.isProtectedClient()) {
                        $state.go('client.dashboard');
                    } else {
                        $state.go('login.client');
                    }
                }
            }
        });
    }
]);