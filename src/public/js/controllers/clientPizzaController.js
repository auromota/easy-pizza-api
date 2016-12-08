app.controller('clientPizzaController', ['$scope', '$state', 'Pizza', 'Order', 'PriceService',
    function ($scope, $state, Pizza, Order, PriceService) {

        $scope.pizzas = Pizza.query(() => {
            $scope.pizzas.forEach(pizza => {
                pizza.price = PriceService.getPizzaPrice(pizza);
                pizza.description = getPizzaDescription(pizza);
            });
        });

        $scope.orderPizza = function (pizza) {
            Order.getOrder((err, order) => {
                Order.orderPizza(order._id, pizza._id, (order) => {
                    $state.go('client.orders');
                })
            });
        };

        function getPizzaDescription(pizza) {
            return pizza.toppings.reduce((description, topping, index) => {
                if (index > 0) {
                    return description + ', ' + topping.name.toLowerCase();
                }
                return capitalizeFirstLetter(topping.name);
            }, '');
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    }]
);