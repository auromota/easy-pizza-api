import GenericDao from '../generic/GenericDao';
import mongoose from 'mongoose';

let drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
});

export const Drink = mongoose.model('Drink', drinkSchema);

export class DrinkDao extends GenericDao {

    constructor() {
        super(Drink);
    }

}