import { Server as WebSocketServer } from 'ws';
import { Server } from 'restify';
import { AuthHandler } from '../security/AuthHandler';
import * as Restify from 'restify';
import { settings } from '../config/Config';
import { Environment } from '../config/Environment';

export class WebSocket {

    private ws: WebSocketServer;

    constructor(server: Server) {
        this.ws = new WebSocketServer({
            server: server.server,
            verifyClient: this.acceptClient
        });
        this.defineWS();
    }

    private acceptClient(info: any, callback: any): void {
        if (settings.env === Environment.Production) {
            let token = AuthHandler.getToken(info.req.headers);
            if (token && AuthHandler.isTokenValid(info.req.headers)) {
                callback(true);
            }
            callback(false, 403, 'Forbidden');
        } else if (settings.env === Environment.Development) {
            callback(true);
        }
    }

    private defineWS(): void {
        let that = this;
        this.ws.on('connection', () => {

        });
    }
}