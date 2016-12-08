app.factory('Pizza', ['$resource', 'LoginService', function ($resource, LoginService) {

    const headers = {
        token: getToken
    };

    return $resource('./api/pizzas/:id', { id: '@_id' },
        {
            query: {
                method: 'GET',
                isArray: true,
                headers
            },
            save: {
                method: 'POST',
                headers
            },
            update: {
                method: 'PUT',
                headers
            },
            remove: {
                method: 'DELETE',
                headers,
                params: {
                    id: '@id'
                }
            }
        }
    );

    function getToken() {
        return LoginService.getToken();
    }
}]);