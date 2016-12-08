app.controller('adminDashboardController', ['$scope', 'WS',
    function ($scope, WS) {

        $scope.orders = [];
        $scope.names = [{ name: 'Auro' }, { name: 'Meire' }];

        WS.on('newOrder', (order) => {
            $scope.orders.push(order);
            console.log($scope.orders);
        });

        WS.on('orderUpdated', (data) => {
            $scope.orders = $scope.orders.filter(order => order._id !== data._id);
            $scope.orders.push(data);
            $scope.names = $scope.orders.map(order => {
                return { name: order.client.name }
            });
            console.log($scope.orders);
        });
    }]
);