require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import Connection from './database/connection';
import WebSocket from './ws/webSocket';
import Config from './config/config';
import getRouter from './route/router';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import errorHandler from './error/errorHandler';
import passport from 'passport';

let app = express();

const ws = new WebSocket(app);

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(getRouter());
app.use(methodOverride());
app.use(errorHandler);

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
