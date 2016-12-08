app.controller('pizzasController', ['$scope', 'Pizza', 'PriceService', function ($scope, Pizza, PriceService) {

    $scope.pizzas = Pizza.query(function () {
        $scope.pizzas.map(pizza => {
            pizza.price = PriceService.getPizzaPrice(pizza);
            return pizza;
        });
    });

    // $scope.pizzas = $scope.pizzas.map(pizza => {
    //     pizza.price = PriceService.getPizzaPrice(pizza);
    //     return pizza;
    // });
    // $scope.pizzas.forEach(pizza => pizza.price = PriceService.getPizzaPrice(pizza));

}]);