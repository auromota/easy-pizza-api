app.service('LoginService', ['$resource', '$http', function ($resource, $http) {

    return {
        login: login,
        register: register,
        isAdminAuthenticated: isAdminAuthenticated
    };

    function login(user) {
        return $http.post('./api/auth/login', user);
    }

    function register(token) {
        localStorage['adminToken'] = token;
    }

    function isAdminAuthenticated() {
        return localStorage['adminToken'] && localStorage['adminToken'].length > 0;
    }

}]);