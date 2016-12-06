import Validator from '../schema/Validator';
import LoginService from '../service/LoginService';
import ErrorUtils from '../error/errorUtils';

export default class LoginController {

    static login(req, res, next) {
        if (Validator.loginPost(req.body)) {
            let service = new LoginService();
            service.login(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}