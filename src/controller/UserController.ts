import * as Restify from 'restify';
import { Validator } from '../schema/Validator';
import { UserService } from '../service/UserService';

export class UserController {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.createUser(req.body)) {
            UserService.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }
}