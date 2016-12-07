import GenericDao from './genericDao';
import mongoose from 'mongoose';

let pizzaDao = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    toppings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topping'
    }],
    custom: {
        type: Boolean,
        default: false
    }
});

export const Pizza = mongoose.model('Pizza', pizzaDao);

export class PizzaDao extends GenericDao {

    constructor() {
        super(Pizza);
    }

    findPopulated(callback) {
        Pizza.find().populate('toppings').exec(callback);
    }

}