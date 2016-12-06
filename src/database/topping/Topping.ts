import { Schema, Types, model } from 'mongoose';
import { ITopping } from './ITopping';

let toppingSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: false
    }
});

export let Topping = model<ITopping>('Topping', toppingSchema);