import * as Restify from 'restify';
import Validator from '../schema/Validator';
import UserService from '../service/UserService';

export default class UserController {

    static create(req, res, next) {
        if (Validator.createUser(req.body)) {
            let service = new UserService();
            service.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }
}