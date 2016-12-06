import * as Restify from 'restify';
import UserDao from '../database/user/UserDao';
import User from '../database/user/User';
import BCryptUtils from '../security/BCryptUtils';

export class UserService {

    constructor() {
        this.dao = new UserDao();
    }

    create(req, res, next) {
        let user = new User();
        user.username = req.body.username;
        user.password = BCryptUtils.crypt(req.body.password);
        user.email = req.body.email;
        this.dao.save(user, (err, user) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200, user);
            return next();
        });
    }

}