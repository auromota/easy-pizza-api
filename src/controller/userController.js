import Validator from '../schema/Validator';
import UserService from '../service/UserService';
import ErrorUtils from '../error/errorUtils';

export default class UserController {

    static create(req, res, next) {
        if (Validator.createUser(req.body)) {
            let service = new UserService();
            service.create(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }
}