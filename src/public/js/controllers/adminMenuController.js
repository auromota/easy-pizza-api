app.controller('adminMenuController', ['$scope', '$rootScope', '$state', 'LoginService',
    function($scope, $rootScope, $state, LoginService) {

        processState($state.current.name);

        function processState(stateName) {
            if (stateName === 'admin.dashboard') {
                $scope.isDashboard = true;
                $scope.isDrinks = false;
                $scope.isToppings = false;
                $scope.isPizzas = false;
                $scope.isLogs = false;
            } else if (stateName === 'admin.drinks') {
                $scope.isDrinks = true;
                $scope.isDashboard = false;
                $scope.isToppings = false;
                $scope.isPizzas = false;
                $scope.isLogs = false;
            } else if (stateName === 'admin.toppings') {
                $scope.isToppings = true;
                $scope.isDrinks = false;
                $scope.isDashboard = false;
                $scope.isPizzas = false;
                $scope.isLogs = false;
            } else if (stateName === 'admin.pizzas') {
                $scope.isPizzas = true;
                $scope.isDrinks = false;
                $scope.isToppings = false;
                $scope.isDashboard = false;
                $scope.isLogs = false;
            } else {
                $scope.isLogs = true;
                $scope.isPizzas = false;
                $scope.isDrinks = false;
                $scope.isToppings = false;
                $scope.isDashboard = false;
            }
        }

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            processState(toState.name);
        });


        $scope.logout = function() {
            LoginService.unregisterAdmin();
            $state.go('login.admin');
        }

    }]
);