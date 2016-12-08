app.factory('Client', ['$resource', 'LoginService', function ($resource, LoginService) {

    const headers = {
        token: getToken
    };

    return $resource('./api/clients/:id', { id: '@_id' },
        {
            query: {
                method: 'GET',
                isArray: true,
                headers
            }
        }
    );

    function getToken() {
        return LoginService.getToken();
    }
}]);