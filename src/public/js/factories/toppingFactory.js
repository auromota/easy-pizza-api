app.factory('Topping', ['$resource', 'LoginService', function ($resource, LoginService) {

    const headers = {
        token: getToken
    };

    return $resource('./api/toppings/:id', { id: '@id' },
        {
            query: {
                method: 'GET',
                isArray: true,
                headers
            }
        }
    );

    function getToken() {
        return LoginService.getAdminToken();
    }
}]);