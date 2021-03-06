import GenericDao from './genericDao';
import mongoose from 'mongoose';

let orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    drinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drink'
    }],
    pizzas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza'
    }],
    initialDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    finalDate: {
        type: Date,
        default: null
    }
});

export const Order = mongoose.model('Order', orderSchema);

export class OrderDao extends GenericDao {

    constructor() {
        super(Order);
    }

    findPopulated(callback) {
        Order.find()
            .populate('client')
            .populate('drinks')
            .populate({
                path: 'pizzas',
                populate: {
                    path: 'toppings',
                    model: 'Topping'
                }
            })
            .populate('table')
            .exec(callback);
    }

    findPopulatedById(orderId, callback) {
        Order.findById(orderId)
            .populate('client')
            .populate('drinks')
            .populate({
                path: 'pizzas',
                populate: {
                    path: 'toppings',
                    model: 'Topping'
                }
            })
            .populate('table')
            .exec(callback);
    }

    removeIncompleteOrderByTableId(tableId, callback) {
        let query = { table: tableId, finalDate: null };
        Order.findOneAndRemove(query, callback);
    }

    endOrder(orderId, callback) {
        let update = { finalDate: new Date() };
        let options = { new: true };
        Order.findByIdAndUpdate(orderId, update, options, callback);
    }

    addPizza(orderId, pizzaId, callback) {
        Order.findById(orderId, (err, order) => {
            if (err) {
                return next(err);
            }
            order.pizzas.push(pizzaId);
            order.save((err, order) => {
                this.findPopulatedById(order._id, callback);
            });
        });
    }

    addDrink(orderId, drinkId, callback) {
        Order.findById(orderId, (err, order) => {
            if (err) {
                return next(err);
            }
            order.drinks.push(drinkId);
            order.save((err, order) => {
                this.findPopulatedById(order._id, callback);
            });
        });
    }

}