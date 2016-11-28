import * as Restify from 'restify';
import { UserDao } from '../db/UserDao';
import { User } from '../db/User';
import { IUser } from '../db/IUser';
import { BCryptUtils } from '../security/BCryptUtils';

export class UserService {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        let user = new User();
        user.username = req.body.username;
        user.password = BCryptUtils.crypt(req.body.password);
        user.email = req.body.email;
        UserDao.create(user, (err: any, user: IUser) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200, user);
            return next();
        });
    }
}