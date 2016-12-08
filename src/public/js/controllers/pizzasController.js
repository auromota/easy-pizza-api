app.controller('pizzasController', ['$scope', 'Pizza', function($scope, Pizza){

    $scope.pizzas = Pizza.query();

}]);