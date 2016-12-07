import GenericDao from '../generic/GenericDao';
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
        console.log(1);
        User.findOne({ username: username }).exec(callback);
    }

}