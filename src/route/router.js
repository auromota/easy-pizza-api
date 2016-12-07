import express from 'express';
import AuthHandler from '../security/authHandler';
import DrinkService from '../service/drinkService';
import ToppingService from '../service/toppingService';
import UserService from '../service/userService';
import LoginService from '../service/loginService';
import TableService from '../service/tableService';
import passport from 'passport';

const router = express.Router();

function getRouter() {

    // Facebook authentication
    router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
    router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), LoginService.handleFacebook);

    // Admin authentication
    router.post('/api/auth/login', LoginService.login);
    router.post('/api/users', UserService.create);

    // Admin routes
    router.post('/api/drinks', AuthHandler.authorizeRequest, DrinkService.create);
    router.put('/api/drinks', AuthHandler.authorizeRequest, DrinkService.update);
    router.post('/api/toppings', AuthHandler.authorizeRequest, ToppingService.create);
    router.put('/api/toppings', AuthHandler.authorizeRequest, ToppingService.update);
    router.delete('/api/toppings', AuthHandler.authorizeRequest, ToppingService.remove);

    // Client routes
    router.put('/api/tables', AuthHandler.authorizeRequest, TableService.setAvailability);
    router.get('/api/tables', AuthHandler.authorizeRequest, TableService.find);

    return router;
}

export default getRouter;