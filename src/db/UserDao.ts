import { IUser } from './IUser';
import { User } from './User';

export class UserDao {

    public static create(user: IUser, callback: (err: any, user: IUser) => any): void {
        user.save(callback);
    }

    public static getUserByUsername(username: string, callback: (err: any, user: IUser) => void): void {
        User.findOne({ username: username }).exec(callback);
    }
}