import { Schema, Types, model } from 'mongoose';
import { IUser } from './IUser';

let userSchema = new Schema({
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

export let User = model<IUser>('User', userSchema);