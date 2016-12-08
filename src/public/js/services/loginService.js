app.service('LoginService', ['$resource', '$http',
    function ($resource, $http) {

        const ADMIN_TOKEN = 'adminToken';
        const CLIENT_TOKEN = 'loginToken';
        const TABLE_NUM = 'tableNum';

        return {
            loginAdmin,
            registerAdmin,
            isAdminAuthenticated,
            getToken,
            unregisterAdmin,
            registerClient,
            unregisterClient,
            isClientAuthenticated,
            sitTable,
            removeTable,
            isTableSet
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
            removeTable();
        }

        function sitTable(num) {
            localStorage[TABLE_NUM] = num;
        }

        function removeTable() {
            localStorage[TABLE_NUM] = '';
        }

        function isTableSet() {
            return localStorage[TABLE_NUM] && localStorage[TABLE_NUM].length > 0;
        }

    }]
);