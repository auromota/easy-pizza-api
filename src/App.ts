import * as restify from 'restify';
import { settings } from './config/config';
import { Router } from './route/Router';
import * as dotenv from 'dotenv';
import { connect, connection } from 'mongoose';
import { Connection } from './database/Connection';

dotenv.config();

export let api = restify.createServer({
    name: settings.name
});

restify.CORS.ALLOW_HEADERS.push('authorization');
api.use(restify.CORS());
api.pre(restify.pre.sanitizePath());
api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.fullResponse());

Router.applyRoutes(api);

connect(Connection.getConnectionString());

connection.on('connected', () => {
    console.log('MongoDB connected to ' + process.env.MONGODB_URL);
    start();
});

function start() {
    api.listen(settings.port, () => {
        console.log('Server is ready at port ' + settings.port);
    });
}

