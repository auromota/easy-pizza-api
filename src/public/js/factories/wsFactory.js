app.factory('WS', ['socketFactory',
    function (socketFactory) {
        var ioSocket = io.connect();

        var mySocket = socketFactory({ ioSocket });

        return mySocket;

    }
]);