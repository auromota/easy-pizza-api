app.factory('Table', ['$http', 'LoginService', function ($http, LoginService) {

    const headers = {
        token: getToken
    };

    return {
        query
    };

    function query() {
        return $http.get('./api/tables', {
            headers
        });
    }

    function getToken() {
        return LoginService.getToken();
    }
}]);