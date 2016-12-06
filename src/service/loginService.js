import UserDao from '../database/user/UserDao';
import User from '../database/user/User';
import JWTUtils from '../security/JWTUtils';
import BCryptUtils from '../security/BCryptUtils';
import ErrorUtils from '../error/ErrorUtils';

export default class LoginService {

    constructor() {
        this.dao = new UserDao();
    }

    login(req, res, next) {
        this.dao.getUserByUsername(req.body.username, (err, user) => {
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
    }

}