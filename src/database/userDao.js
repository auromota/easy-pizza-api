import GenericDao from './genericDao';
import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = mongoose.model('User', userSchema);

export class UserDao extends GenericDao {

    constructor() {
        super(User);
    }

    findUserByUsername(username, callback) {
        User.findOne({ username: username }).exec(callback);
    }

}