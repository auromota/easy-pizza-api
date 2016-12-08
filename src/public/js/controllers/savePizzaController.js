app.controller('savePizzaController', ['$scope', 'Topping', 'Pizza', '$state', '$stateParams',
    function ($scope, Topping, Pizza, $state, $stateParams) {

        let sortFn = (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase());

        var isEdit = false;

        $scope.toppings = Topping.query(() => {
            if ($stateParams.pizza) {
                $scope.pizza = $stateParams.pizza;
                $scope.pizza.toppings.forEach(topping => removeToppingFromList(topping));
                isEdit = true;
            } else {
                $scope.pizza = {};
                $scope.pizza.toppings = [];
                $scope.name = null;
            }
            $scope.toppings.sort(sortFn);
        });

        function removeToppingFromList(toppingFilter){
            $scope.toppings = $scope.toppings.filter(topping => topping._id !== toppingFilter._id);
        }

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

        $scope.save = function () {
            // Test if the user has added some topping to the pizza
            if ($scope.pizza.toppings.length == 0) {
                alert("Selecione o(s) ingrediente(s).");
                return;
            }

            // Test if user gave a name to the pizza
            if ($scope.pizza.name == null) {
                alert("Dê um nome para a pizza animal.");
                return;
            }

            // Everything ok, we can continue
            if (isEdit) {
                Pizza.update($scope.pizza, goToList);
            } else {
                Pizza.save($scope.pizza, goToList);
            }
        }


        function goToList() {
            $state.go('admin.pizzas');
        }

    }]);