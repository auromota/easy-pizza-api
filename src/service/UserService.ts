import * as Restify from 'restify';
import { UserDao } from '../database/user/UserDao';
import { User } from '../database/user/User';
import { IUser } from '../database/user/IUser';
import { BCryptUtils } from '../security/BCryptUtils';

export class UserService {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        let user = new User();
        user.username = req.body.username;
        user.password = BCryptUtils.crypt(req.body.password);
        user.email = req.body.email;
        UserDao.save(user, (err: any, user: IUser) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200, user);
            return next();
        });
    }

}