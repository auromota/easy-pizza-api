app.controller('clientOrderController', ['$scope', 'Table',
    function ($scope, Table) {

        Table.query().then(function (response) {
            $scope.tables = response.data.filter(table => table.availability === true);
        });

    }
]);