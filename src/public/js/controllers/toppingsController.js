app.controller('toppingsController', ['$scope', 'Topping',
    function ($scope, Topping) {

        $scope.toppings = Topping.query();

    }]
);