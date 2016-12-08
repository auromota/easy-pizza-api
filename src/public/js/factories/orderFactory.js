app.factory('Order', ['$http', 'LoginService', function ($http, LoginService) {

    const ORDER_ID = 'ORDER_ID';

    const headers = {
        token: getToken
    };

    let order = null;

    return {
        openOrder,
        store,
        getOrder
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
        if (getId()) {
            return $http.get('./api/orders/' + getId(), { headers }).then(
                (result) => {
                    order = result.data;
                    callback(null, result.data);
                }, (err) => {
                    callback(err);
                }
            );
        }
        return callback({ message: 'Order ID is missing.' });
    }

    function store(data) {
        localStorage[ORDER_ID] = data._id;
        order = data;
    }

    function getId() {
        return localStorage[ORDER_ID];
    }

    function getToken() {
        return LoginService.getToken();
    }
}]);