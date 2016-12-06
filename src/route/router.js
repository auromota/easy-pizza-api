import express from 'express';
import AuthHandler from '../security/authHandler';
import LoginController from '../controller/loginController';
import UserController from '../controller/userController';
import DrinkController from '../controller/drinkController';
import ToppingController from '../controller/toppingController';

const router = express.Router();

router.post('/api/login', LoginController.login);
router.post('/api/users', UserController.create);
router.post('/api/drinks', AuthHandler.authorizeRequest, DrinkController.create);
router.put('/api/drinks', AuthHandler.authorizeRequest, DrinkController.update);
router.post('/api/toppings', AuthHandler.authorizeRequest, ToppingController.create);
router.put('/api/toppings', AuthHandler.authorizeRequest, ToppingController.update);
router.delete('/api/toppings', AuthHandler.authorizeRequest, ToppingController.remove);

export default router;