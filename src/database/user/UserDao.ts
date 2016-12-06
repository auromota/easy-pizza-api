import { IUser } from './IUser';
import { User } from './User';
import { GenericDao } from '../generic/GenericDao';

export class UserDao extends GenericDao<IUser> {

    public getUserByUsername(username: string, callback: (err: any, user: IUser) => void): void {
        User.findOne({ username: username }).exec(callback);
    }

}