app.controller('drinksController', ['$scope', 'Drink', 'PriceService', function ($scope, Drink, PriceService) {

    $scope.drinks = Drink.query();
    
    $scope.remove = function (drink) {
        if (confirm('Deseja remover a bebida ' + drink.name + '?')) {
            Drink.remove({ id: drink._id }, function (res) {
                $scope.drinks = $scope.drinks.filter(drink => drink._id !== res._id);
            });
        }
    }
}]);