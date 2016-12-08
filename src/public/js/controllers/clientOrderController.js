app.controller('clientOrderController', ['$scope', '$state', 'Order', 'PriceService', 'LoginService',
    function ($scope, $state, Order, PriceService, LoginService) {

        Order.getOrder((err, order) => {
            $scope.order = order;
            $scope.drinksTotal = PriceService.getTotalPrice($scope.order.drinks);
            $scope.order.pizzas.forEach(pizza => {
                pizza.price = PriceService.getPizzaPrice(pizza);
            });
            $scope.pizzasTotal = PriceService.getTotalPrice($scope.order.pizzas);
            $scope.total = $scope.drinksTotal + $scope.pizzasTotal;
        });

        $scope.finishOrder = function () {
            Order.endOrder($scope.order._id).then(
                (order) => {
                    LoginService.removeTable();
                    LoginService.removeOrder();
                    $state.go('table');
                },
                (err) => {
                    console.log(err);
                }
            )
        }

    }
]);