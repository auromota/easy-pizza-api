app.controller('clientOrderController', ['$scope', 'Order', 'PriceService',
    function ($scope, Order, PriceService) {
        
        Order.getOrder((err, order) => {
            $scope.order = order;
            $scope.drinksTotal = PriceService.sumPrice($scope.order.drinks);
            $scope.order.pizzas.forEach(pizza => {
                pizza.price = PriceService.sumPrice(pizza.toppings);
            });
            $scope.pizzasTotal = PriceService.sumPrice($scope.order.pizzas);
        });

    }
]);