import express from 'express';
import AuthHandler from '../security/authHandler';
import ClientService from '../service/clientService';
import getFacebookConfig from '../config/facebookConfig';
import DrinkService from '../service/drinkService';
import ToppingService from '../service/toppingService';
import UserService from '../service/userService';
import LoginService from '../service/loginService';
import passport from 'passport';
import Facebook from 'passport-facebook';

const router = express.Router();

function getRouter() {

    passport.use(new Facebook.Strategy(getFacebookConfig(), ClientService.save));

    router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
    router.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

    router.post('/api/auth/login', LoginService.login);
    router.post('/api/users', UserService.create);
    router.post('/api/drinks', AuthHandler.authorizeRequest, DrinkService.create);
    router.put('/api/drinks', AuthHandler.authorizeRequest, DrinkService.update);
    router.post('/api/toppings', AuthHandler.authorizeRequest, ToppingService.create);
    router.put('/api/toppings', AuthHandler.authorizeRequest, ToppingService.update);
    router.delete('/api/toppings', AuthHandler.authorizeRequest, ToppingService.remove);
    return router;
}

export default getRouter;