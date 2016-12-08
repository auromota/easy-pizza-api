app.controller('clientAccessController', ['$scope', '$location', '$state', 'LoginService', 'Order', 'Table',
    function ($scope, $location, $state, LoginService, Order, Table) {

        let token = $location.search().token;
        if (token) {
            LoginService.registerClient(token);
            let table = LoginService.getTable();
            if (table) {
                Order.getOrder((err, order) => {
                    if (err) {
                        Order.openOrder(table.num).then((result) => {
                            $state.go('client.orders');
                        });
                    } else {
                        $state.go('client.orders');
                    }
                });
            } else {
                $state.go('table');
            }
        }

        $scope.facebook = function () {
            window.location.href = '../auth/facebook';
        }

    }]
);