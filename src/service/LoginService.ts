import * as Restify from 'restify';
import { UserDao } from '../database/user/UserDao';
import { User } from '../database/user/User';
import { IUser } from '../database/user/IUser';
import { JWTUtils } from '../security/JWTUtils';
import { BCryptUtils } from '../security/BCryptUtils';
import { ErrorUtils } from '../error/ErrorUtils';
import { EasyPizzaErrorType } from '../error/EasyPizzaErrorType';

export class LoginService {

    public static login(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        UserDao.getUserByUsername(req.body.username, (err: any, user: IUser) => {
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
                res.json(403, ErrorUtils.error(EasyPizzaErrorType.InvalidPassword));
                return next(false);
            }
        });
    }

}