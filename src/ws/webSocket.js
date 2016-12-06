import { Server as WebSocketServer } from 'ws';
import AuthHandler from '../security/AuthHandler';
import Config from '../config/Config';

export default class WebSocket {

    constructor(server) {
        this.ws = new WebSocketServer({
            server: server,
            verifyClient: this.acceptClient
        });
        this.defineWS();
    }

    acceptClient(info, callback) {
        if (Config.env === 'production') {
            let token = AuthHandler.getToken(info.req.headers);
            if (token && AuthHandler.isTokenValid(info.req.headers)) {
                callback(true);
            }
            callback(false, 403, 'Forbidden');
        } else if (Config.env === 'development') {
            callback(true);
        }
    }

    defineWS() {
        let that = this;
        this.ws.on('connection', () => {

        });
    }
}