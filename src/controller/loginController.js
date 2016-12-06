import Validator from '../schema/Validator';
import LoginService from '../service/LoginService';

export default class LoginController {

    static login(req, res, next) {
        if (Validator.loginPost(req.body)) {
            let service = new LoginService();
            service.login(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}