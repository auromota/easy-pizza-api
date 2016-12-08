app.controller('toppingsController', ['$scope', 'Topping',
    function ($scope, Topping) {

        $scope.toppings = Topping.query();

        $scope.remove = function (topping) {
            if (confirm('Deseja remover o ingrediente ' + topping.name + '?')) {
                Topping.remove({ id: topping._id }, function (res) {
                    $scope.toppings = $scope.toppings.filter(topping => topping._id !== res._id);
                });
            }
        }
    }]
);