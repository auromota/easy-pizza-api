app.service('PriceService', [
    function () {

        const pizzaBasePrice = 10;

        const sumPriceFn = (total, item) => total + item.price;

        return {
            getTotalPrice,
            getPizzaPrice
        };

        function getTotalPrice(array) {
            return array.reduce(sumPriceFn, 0);
        }

        function getPizzaPrice(pizza) {
            return pizza.toppings.reduce(sumPriceFn, pizzaBasePrice);
        }

    }]
);