app.controller('savePizzaController', ['$scope', 'Topping', function($scope, Topping){
    $scope.toppings = Topping.query();
}]);