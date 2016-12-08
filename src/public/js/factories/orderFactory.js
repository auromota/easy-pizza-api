app.factory('Order', ['$http', 'LoginService', function ($http, LoginService) {

    const headers = {
        token: getToken
    };

    let order = null;

    return {
        openOrder,
        getOrder,
        orderDrink
    };

    function openOrder(order) {
        return $http.post('./api/orders', order, {
            headers
        });
    }

    function getOrder(callback) {
        if (order) {
            return callback(null, order);
        }
        let orderId = LoginService.getOrderId();
        if (orderId) {
            return $http.get('./api/orders/' + orderId, { headers }).then(
                (result) => {
                    LoginService.saveOrder(result.data);
                    callback(null, result.data);
                }, (err) => {
                    callback(err);
                }
            );
        }
        return callback({ message: 'Order ID is missing.' });
    }

    function orderDrink(orderId, drink, callback) {
        return $http.post('./api/orders/' + orderId + '/drinks', { drink }, { headers }).then((result) => {
            LoginService.saveOrder(result.data);
            callback(order);
        });
    }

    function getToken() {
        return LoginService.getToken();
    }
}]);