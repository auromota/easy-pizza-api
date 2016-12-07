import mongoose from 'mongoose';
import GenericDao from '../generic/genericDao';

let toppingSchema = new mongoose.Schema({
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

export const Topping = mongoose.model('Topping', toppingSchema);

export class ToppingDao extends GenericDao {

    constructor() {
        super(Topping);
    }

}