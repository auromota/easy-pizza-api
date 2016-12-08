app.controller('clientTableController', ['$scope', '$state', 'Table', 'Order', 'LoginService',
    function ($scope, $state, Table, Order, LoginService) {

        Table.query().then(function (response) {
            $scope.tables = response.data.filter(table => table.availability === true);
        });

        $scope.sit = function (table) {
            Order.openOrder({ table: table._id }).then(function (response) {
                LoginService.sitTable(table.num);
                Order.store(response.data);
                $state.go('client.dashboard');
            });
        }

    }
]);