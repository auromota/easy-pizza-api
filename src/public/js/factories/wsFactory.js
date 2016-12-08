app.factory('WS', ['socketFactory',
    function (socketFactory) {
        var ioSocket = io.connect('http://localhost:8080');

        var mySocket = socketFactory({ ioSocket });

        return mySocket;

    }
]);