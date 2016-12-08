app.controller('clientOrderController', ['$scope', 'Order', 'PriceService',
    function ($scope, Order, PriceService) {

        Order.getOrder((err, order) => {
            $scope.order = order;
            $scope.drinksTotal = PriceService.getTotalPrice($scope.order.drinks);
            $scope.order.pizzas.forEach(pizza => {
                pizza.price = PriceService.getPizzaPrice(pizza);
            });
            $scope.pizzasTotal = PriceService.getTotalPrice($scope.order.pizzas);
        });

    }
]);