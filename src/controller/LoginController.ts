import * as Restify from 'restify';
import { Validator } from '../schema/Validator';
import { LoginService } from '../service/LoginService';

export class LoginController {

    public static login(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.loginPost(req.body)) {
            let service = new LoginService();
            service.login(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}