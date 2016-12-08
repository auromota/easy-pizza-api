app.controller('adminUsersController', ['$scope', 'Client',
    function ($scope, Client) {
        $scope.clients = Client.query();
    }
]);