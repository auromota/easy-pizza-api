import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Connection from './database/connection';
import WebSocket from './ws/WebSocket';
import Config from './config/config';
import Router from './route/router';
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import errorHandler from './error/errorHandler';

dotenv.config();

let app = express(Config);

const ws = new WebSocket(app);

app.use(cors());
app.use(bodyParser.json());
app.use(Router);
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
