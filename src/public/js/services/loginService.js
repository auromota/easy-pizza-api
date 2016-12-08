app.service('LoginService', ['$resource', '$http', function ($resource, $http) {

    const ADMIN_TOKEN = 'adminToken';
    const CLIENT_TOKEN = 'loginToken';

    return {
        loginAdmin,
        registerAdmin,
        isAdminAuthenticated,
        getToken,
        unregisterAdmin,
        registerClient,
        unregisterClient,
        isClientAuthenticated
    };

    function loginAdmin(user) {
        return $http.post('./api/auth/login', user);
    }

    function registerClient(token) {
        unregisterAdmin();
        localStorage[CLIENT_TOKEN] = token;
    }

    function registerAdmin(token) {
        unregisterClient();
        localStorage[ADMIN_TOKEN] = token;
    }

    function isClientAuthenticated() {
        return localStorage[CLIENT_TOKEN] && localStorage[CLIENT_TOKEN].length > 0;
    }

    function isAdminAuthenticated() {
        return localStorage[ADMIN_TOKEN] && localStorage[ADMIN_TOKEN].length > 0;
    }

    function getToken() {
        if (isClientAuthenticated()) {
            return localStorage[CLIENT_TOKEN];
        }
        return localStorage[ADMIN_TOKEN];
    }

    function unregisterAdmin() {
        localStorage[ADMIN_TOKEN] = '';
    }

    function unregisterClient() {
        localStorage[CLIENT_TOKEN] = '';
    }

}]);