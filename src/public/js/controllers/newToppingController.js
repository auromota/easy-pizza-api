app.controller('newToppingController',['$scope', 'Topping', function($scope, Topping){

    $scope.add = function(topping){
        Topping.save(topping, function(data){
            console.log(data);       
        })
    }

}]);