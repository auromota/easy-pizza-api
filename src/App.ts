import * as Restify from 'restify';
import { settings } from './config/config';
import { Router } from './route/Router';
import * as Dotenv from 'dotenv';
import { connect, connection } from 'mongoose';
import { Connection } from './database/Connection';
import { WebSocket } from './ws/WebSocket';

Dotenv.config();

export let server = Restify.createServer(settings);

let ws = new WebSocket(server);

Restify.CORS.ALLOW_HEADERS.push('authorization');
server.use(Restify.CORS());
server.pre(Restify.pre.sanitizePath());
server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.bodyParser());
server.use(Restify.queryParser());
server.use(Restify.fullResponse());

Router.applyRoutes(server);

connect(Connection.getConnectionString());

connection.on('connected', () => {
    console.log('MongoDB connected to ' + process.env.MONGODB_URL);
    start();
});

function start() {
    server.listen(settings.port, () => {
        console.log('Server is ready at port ' + settings.port);
    });
}

