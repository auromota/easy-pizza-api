import express from 'express';
import AuthHandler from '../security/authHandler';
import DrinkService from '../service/DrinkService';
import ToppingService from '../service/ToppingService';
import UserService from '../service/UserService';
import LoginService from '../service/LoginService';

const router = express.Router();

router.post('/api/login', LoginService.login);
router.post('/api/users', UserService.create);
router.post('/api/drinks', AuthHandler.authorizeRequest, DrinkService.create);
router.put('/api/drinks', AuthHandler.authorizeRequest, DrinkService.update);
router.post('/api/toppings', AuthHandler.authorizeRequest, ToppingService.create);
router.put('/api/toppings', AuthHandler.authorizeRequest, ToppingService.update);
router.delete('/api/toppings', AuthHandler.authorizeRequest, ToppingService.remove);

export default router;