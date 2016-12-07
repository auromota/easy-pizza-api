app.factory('Topping', function($resource) {
  return $resource('./api/toppings/:id'); // Note the full endpoint address
});