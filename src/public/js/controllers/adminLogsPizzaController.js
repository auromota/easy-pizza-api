app.controller('adminLogsPizzaController', ['$scope', 'Order', 'PriceService',
    function ($scope, Order, PriceService) {

        $scope.pizzas = [];

        Order.getOrders().then((result) => {
            let orders = result.data;
            calculatePizzaArray(orders);
        });

        function calculatePizzaArray(orders) {
            orders.forEach(order => processOrder(order));
            $scope.pizzas.sort((a, b) => a.numOrders > b.numOrders ? -1 : 1);
        }

        function processOrder(order) {
            order.pizzas.forEach(pizza => processPizza(pizza));
        }

        function processPizza(pizza) {
            let index = getPizzaIndex(pizza);
            if (index > -1) {
                sumCounterPizza(index);
            } else {
                addPizzaToArray(pizza);
            }
        }

        function sumCounterPizza(index) {
            $scope.pizzas[index].numOrders++;
        }

        function addPizzaToArray(pizza) {
            let data = {
                name: pizza.name,
                price: PriceService.getPizzaPrice(pizza),
                numOrders: 1
            };
            $scope.pizzas.push(data);
        }

        function getPizzaIndex(pizzaSearch) {
            return $scope.pizzas.findIndex(pizza => pizza.name === pizzaSearch.name);
        }

    }
]);