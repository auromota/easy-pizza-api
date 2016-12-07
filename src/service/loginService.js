import { User, UserDao } from '../database/userDao';
import JWTUtils from '../security/jwtUtils';
import BCryptUtils from '../security/bcryptUtils';
import ErrorUtils from '../error/errorUtils';
import Validator from '../schema/validator';

const dao = new UserDao();

export default class LoginService {

    static login(req, res, next) {
        if (Validator.loginPost(req.body)) {
            dao.findUserByUsername(req.body.username, (err, user) => {
                if (err) {
                    return next(err);
                }
                if (BCryptUtils.verify(req.body.password, user.password)) {
                    let token = JWTUtils.login(user);
                    res.status(200).json({
                        token: token,
                        user: user
                    });
                } else {
                    next(ErrorUtils.InvalidPassword);
                }
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}