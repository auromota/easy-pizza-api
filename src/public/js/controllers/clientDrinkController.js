app.controller('clientDrinkController', ['$scope', '$state', 'Drink', 'Order',
    function ($scope, $state, Drink, Order) {

        $scope.drinks = Drink.query();

        $scope.orderDrink = function (drink) {
            Order.getOrder((err, order) => {
                Order.orderDrink(order._id, drink._id, (order) => {
                    $state.go('client.orders');
                })
            });
        };
    }]
);