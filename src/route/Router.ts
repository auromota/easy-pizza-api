import * as Restify from 'restify';
import { AuthHandler } from '../security/AuthHandler';
import { LoginController } from '../controller/LoginController';
import { UserController } from '../controller/UserController';

export class Router {

    public static applyRoutes(api: Restify.Server) {
        api.post('/api/login', LoginController.login);
        api.post('/api/users', UserController.create);
    }

}
