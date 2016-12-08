app.controller('adminDashboardController', ['$scope', 'WS',
    function ($scope, WS) {

        $scope.orders = [];

        WS.on('newOrder', (order) => {
            $scope.orders.push(order);
        });

        $scope.removeOrder = function (order) {
            let index = $scope.orders.indexOf(order);
            $scope.orders.splice(index, 1);
        }
    }]
);