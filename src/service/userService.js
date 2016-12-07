import { User, UserDao } from '../database/user/UserDao';
import BCryptUtils from '../security/BCryptUtils';

const dao = new UserDao();

export default class UserService {

    static create(req, res, next) {
        let user = new User();
        user.username = req.body.username;
        user.password = BCryptUtils.crypt(req.body.password);
        user.email = req.body.email;
        dao.save(user, (err, user) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(user);
        });
    }

}