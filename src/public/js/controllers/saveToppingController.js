app.controller('saveToppingController', ['$scope', '$state', '$stateParams', 'Topping',
    function ($scope, $state, $stateParams, Topping) {

        var isEdit = false;

        if ($stateParams.topping) {
            $scope.topping = $stateParams.topping;
            isEdit = true;
        } else {
            $scope.topping = {};
        }

        $scope.save = function () {
            if (isEdit) {
                Topping.update($scope.topping, goToList);
            } else {
                Topping.save($scope.topping, goToList);
            }

            function goToList() {
                $state.go('admin.toppings');
            }
        }

    }]
);