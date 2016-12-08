app.controller('clientMenuController', ['$scope', '$rootScope', '$state', 'LoginService', 'Order',
    function ($scope, $rootScope, $state, LoginService, Order) {

        processState($state.current.name);

        function processState(stateName) {
            switch (stateName) {
                case 'client.orders':
                    $scope.isOrders = true;
                    $scope.isDrinks = false;
                    $scope.isPizzas = false;
                    break;
                case 'client.drinks':
                    $scope.isOrders = false;
                    $scope.isDrinks = true;
                    $scope.isPizzas = false;
                    break;
                case 'client.pizzas':
                    $scope.isOrders = false;
                    $scope.isDrinks = false;
                    $scope.isPizzas = true;
                    break;
                default: break;
            }
        }

        $rootScope.$on('$stateChangeStart', function (event, toState) {
            processState(toState.name);
        });

        $scope.logout = function () {
            LoginService.unregisterClient();
            $state.go('login.client');
        }

    }
]);