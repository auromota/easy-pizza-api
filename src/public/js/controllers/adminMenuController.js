app.controller('adminMenuController', ['$scope', '$rootScope', '$state', 'LoginService',
    function ($scope, $rootScope, $state, LoginService) {

        processState($state.current.name);

        function processState(stateName) {
            switch (stateName) {
                case 'admin.dashboard':
                    $scope.isDashboard = true;
                    $scope.isDrinks = false;
                    $scope.isToppings = false;
                    $scope.isPizzas = false;
                    break;
                case 'admin.drinks':
                    $scope.isDrinks = true;
                    $scope.isDashboard = false;
                    $scope.isToppings = false;
                    $scope.isPizzas = false;
                    break;
                case 'admin.toppings':
                    $scope.isToppings = true;
                    $scope.isDrinks = false;
                    $scope.isDashboard = false;
                    $scope.isPizzas = false;
                    break;
                case 'admin.pizzas':
                    $scope.isPizzas = true;
                    $scope.isDrinks = false;
                    $scope.isToppings = false;
                    $scope.isDashboard = false;
                    break;
                default: break;
            }
        }

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            processState(toState.name);
        });


        $scope.logout = function () {
            LoginService.unregisterAdmin();
            $state.go('login.admin');
        }

    }]
);