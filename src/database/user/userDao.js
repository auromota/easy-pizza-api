import GenericDao from '../generic/GenericDao';
import mongoose from 'mongoose';

export default class UserDao extends GenericDao {

    constructor() {
        super();
        this.user = mongoose.model('User');
    }

    getUserByUsername(username, callback) {
        this.user.findOne({ username: username }).exec(callback);
    }

}