import * as Restify from 'restify';
import { UserDao } from '../db/UserDao';
import { User } from '../db/User';
import { IUser } from '../db/IUser';
import {JWTUtils} from '../security/JWTUtils';

export class LoginService {

    public static login(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        UserDao.getUserByUsername(req.body.username, (err: any, user: IUser) => {
            if (err) {
                res.json(401, err);
                return next(false);
            } else {
                let token = JWTUtils.login(user);
                res.json(200, {
                    token: token,
                    user: user
                });
                return next();
            }
        });
    }

}