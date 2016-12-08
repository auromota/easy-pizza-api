app.service('LoginService', ['$resource', '$http', function ($resource, $http) {

    const ADMIN_TOKEN = 'adminToken';

    return {
        loginAdmin,
        registerAdmin,
        isAdminAuthenticated,
        getAdminToken,
        unregisterAdmin
    };

    function loginAdmin(user) {
        return $http.post('./api/auth/login', user);
    }

    function registerAdmin(token) {
        localStorage[ADMIN_TOKEN] = token;
    }

    function isAdminAuthenticated() {
        return localStorage[ADMIN_TOKEN] && localStorage[ADMIN_TOKEN].length > 0;
    }

    function getAdminToken() {
        return localStorage[ADMIN_TOKEN];
    }

    function unregisterAdmin() {
        localStorage[ADMIN_TOKEN] = '';
    }

}]);