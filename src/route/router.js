import AuthHandler from '../security/authHandler';
import LoginController from '../controller/loginController';
import UserController from '../controller/userController';
import DrinkController from '../controller/drinkController';
import ToppingController from '../controller/toppingController';

export default class Router {

    static applyRoutes(api) {
        api.post('/api/login', LoginController.login);
        api.post('/api/users', UserController.create);
        api.post('/api/drinks', AuthHandler.authorizeRequest, DrinkController.create);
        api.put('/api/drinks', AuthHandler.authorizeRequest, DrinkController.update);
        api.post('/api/toppings', AuthHandler.authorizeRequest, ToppingController.create);
        api.put('/api/toppings', AuthHandler.authorizeRequest, ToppingController.update);
        api.delete('/api/toppings', AuthHandler.authorizeRequest, ToppingController.remove);
    }

}