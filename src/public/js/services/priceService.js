app.service('PriceService', [
    function () {

        let sumPriceFn = (total, item) => total + item.price;

        return {
            sumPrice
        };

        function sumPrice(array) {
            return array.reduce(sumPriceFn, 0);
        }

    }]
);