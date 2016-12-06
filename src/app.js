import restify from 'restify';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Connection from './database/connection';
import WebSocket from './ws/WebSocket';
import Config from './config/config';
import Router from './route/router';

dotenv.config();

let app = restify.createServer(Config);

const ws = new WebSocket(app);

restify.CORS.ALLOW_HEADERS.push('authorization');
app.use(restify.CORS());
app.pre(restify.pre.sanitizePath());
app.use(restify.acceptParser(app.acceptable));
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(restify.fullResponse());

Router.applyRoutes(app);

mongoose.connect(Connection.connection);

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected to ' + process.env.MONGODB_URL);
    start();
});

function start() {
    app.listen(Config.port, () => {
        console.log('Server is ready at port ' + Config.port);
    });
}

export default app;
