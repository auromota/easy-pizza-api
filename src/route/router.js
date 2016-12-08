import express from 'express';
import AuthHandler from '../security/authHandler';
import DrinkService from '../service/drinkService';
import ToppingService from '../service/toppingService';
import TableService from '../service/tableService';
import PizzaService from '../service/pizzaService';
import UserService from '../service/userService';
import LoginService from '../service/loginService';
import OrderService from '../service/orderService';
import passport from 'passport';

const router = express.Router();

function getRouter() {

    // Facebook authentication
    router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
    router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), LoginService.handleFacebook);

    // Admin authentication
    router.post('/api/auth/login', LoginService.login);
    router.post('/api/users', UserService.create);

    // Drinks
    router.get('/api/drinks', AuthHandler.authorizeRequest, DrinkService.find);
    router.post('/api/drinks', AuthHandler.authorizeRequest, DrinkService.create);
    router.put('/api/drinks/:id', AuthHandler.authorizeRequest, DrinkService.update);
    router.delete('/api/drinks/:id', AuthHandler.authorizeRequest, DrinkService.remove);

    // Toppings
    router.get('/api/toppings', AuthHandler.authorizeRequest, ToppingService.find);
    router.post('/api/toppings', AuthHandler.authorizeRequest, ToppingService.create);
    router.put('/api/toppings/:id', AuthHandler.authorizeRequest, ToppingService.update);
    router.delete('/api/toppings/:id', AuthHandler.authorizeRequest, ToppingService.remove);

    // Pizzas
    router.get('/api/pizzas', AuthHandler.authorizeRequest, PizzaService.find);
    router.post('/api/pizzas', AuthHandler.authorizeRequest, PizzaService.create);
    router.put('/api/pizzas/:id', AuthHandler.authorizeRequest, PizzaService.update);
    router.delete('/api/pizzas/:id', AuthHandler.authorizeRequest, PizzaService.remove);

    // Tables
    router.get('/api/tables', AuthHandler.authorizeRequest, TableService.find);

    // Orders
    router.get('/api/orders/:id', AuthHandler.authorizeRequest, OrderService.findOrder);
    router.post('/api/orders', AuthHandler.authorizeRequest, OrderService.openOrder);
    router.post('/api/orders/:id/pizzas', AuthHandler.authorizeRequest, OrderService.orderPizza);
    router.post('/api/orders/:id/drinks', AuthHandler.authorizeRequest, OrderService.orderDrink);
    router.delete('/api/orders/:id', AuthHandler.authorizeRequest, OrderService.endOrder);

    return router;
}

export default getRouter;