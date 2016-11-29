import * as Restify from 'restify';
import { AuthHandler } from '../security/AuthHandler';
import { LoginController } from '../controller/LoginController';
import { UserController } from '../controller/UserController';
import { DrinkController } from '../controller/DrinkController';

export class Router {

    public static applyRoutes(api: Restify.Server) {
        api.post('/api/login', LoginController.login);
        api.post('/api/users', UserController.create);
        api.post('/api/drinks', AuthHandler.authorizeRequest, DrinkController.create);
        api.put('/api/drinks', AuthHandler.authorizeRequest, DrinkController.update);
    }

}
