app.controller('saveDrinkController', ['$scope', '$state', '$stateParams', 'Drink',
    function ($scope, $state, $stateParams, Drink) {

        var isEdit = false;

        if ($stateParams.drink) {
            $scope.drink = $stateParams.drink;
            isEdit = true;
        } else {
            $scope.drink = {};
        }

        $scope.save = function () {
            if (isEdit) {
                Drink.update($scope.drink, goToList);
            } else {
                Drink.save($scope.drink, goToList);
            }

            function goToList() {
                $state.go('admin.drinks');
            }
        }

    }]
);