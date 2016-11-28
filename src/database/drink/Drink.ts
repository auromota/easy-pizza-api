import { Schema, Types, model } from 'mongoose';
import { IDrink } from './IDrink';

let drinkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
});

export let Drink = model<IDrink>('Drink', drinkSchema);