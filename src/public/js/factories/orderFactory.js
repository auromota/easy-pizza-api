app.factory('Order', ['$http', 'LoginService', function ($http, LoginService) {

    const headers = {
        token: getToken
    };

    let order;

    return {
        openOrder,
        store
    };

    function openOrder(order) {
        return $http.post('./api/orders', order, {
            headers
        });
    }

    function store(data) {
        order = data;
    }

    function getToken() {
        return LoginService.getToken();
    }
}]);