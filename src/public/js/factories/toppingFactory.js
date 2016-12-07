app.factory('Topping', ['$resource', function ($resource) {
    return $resource('./api/toppings/:id');
}]);