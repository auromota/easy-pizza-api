app.controller('pizzasController', ['$scope', 'Drink', 'PriceService', function ($scope, Drink, PriceService) {

    $scope.drinks = Drink.query();
    
    // $scope.remove = function (pizza) {
    //     if (confirm('Deseja remover a pizza ' + pizza.name + '?')) {
    //         Pizza.remove({ id: pizza._id }, function (res) {
    //             $scope.pizzas = $scope.pizzas.filter(pizza => pizza._id !== res._id);
    //         });
    //     }
    // }
}]);