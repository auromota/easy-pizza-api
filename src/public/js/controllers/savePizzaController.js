app.controller('savePizzaController', ['$scope', 'Topping', function ($scope, Topping) {

    let sortFn = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());

    $scope.toppings = Topping.query(() => $scope.toppings.sort(sortFn));

    $scope.pizza = {};
    $scope.pizza.toppings = [];

    $scope.addTopping = function (topping) {
        $scope.pizza.toppings.push(topping);

        $scope.pizza.toppings.sort(sortFn)

        let index = $scope.toppings.indexOf(topping);

        $scope.toppings.splice(index, 1);
    }

    $scope.removeTopping = function (topping) {
        $scope.toppings.push(topping);
        let index = $scope.pizza.toppings.indexOf(topping);

        $scope.toppings.sort(sortFn)

        $scope.pizza.toppings.splice(index, 1);
    }

}]);