import GenericDao from '../generic/GenericDao';
import mongoose from 'mongoose';

export default class UserDao extends GenericDao {

    static getUserByUsername(username, callback) {
        let user = mongoose.model('User');
        user.findOne({ username: username }).exec(callback);
    }

}