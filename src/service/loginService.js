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
                res.json(401, err);
                return next(false);
            } else {
                if (BCryptUtils.verify(req.body.password, user.password)) {
                    let token = JWTUtils.login(user);
                    res.json(200, {
                        token: token,
                        user: user
                    });
                    return next();
                }
                res.json(403, ErrorUtils.InvalidPassword);
                return next(false);
            }
        });
    }

}