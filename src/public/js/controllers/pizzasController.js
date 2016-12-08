app.controller('pizzasController', ['$scope', 'Pizza', 'PriceService', function ($scope, Pizza, PriceService) {

    $scope.pizzas = Pizza.query(function () {
        $scope.pizzas.map(pizza => {
            pizza.price = PriceService.getPizzaPrice(pizza);
            return pizza;
        });
    });
    
    $scope.remove = function (pizza) {
        if (confirm('Deseja remover a pizza ' + pizza.name + '?')) {
            Pizza.remove({ id: pizza._id }, function (res) {
                $scope.pizzas = $scope.pizzas.filter(pizza => pizza._id !== res._id);
            });
        }
    }
}]);