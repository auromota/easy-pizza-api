app.controller('clientDrinkController', ['$scope', 'Drink',
    function ($scope, Drink) {

        $scope.drinks = Drink.query();

    }]
);