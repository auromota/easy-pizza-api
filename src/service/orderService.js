import { Order, OrderDao } from '../database/orderDao';
import TableService from './tableService';
import Validator from '../security/validator';
import ErrorUtils from '../error/errorUtils';
import io from '../ws/io';
import async from 'async';

const dao = new OrderDao();

export default class OrderService {

    static findOrder(req, res, next) {
        if (Validator.identify(req.params)) {
            dao.findPopulatedById(req.params.id, (err, order) => {
                if (err) {
                    return next(err);
                }
                res.status(200).json(order);
            });
        } else {
            next(ErroUtils.BadRequest);
        }
    }

    static openOrder(req, res, next) {
        if (Validator.openOrder(req.body)) {
            async.parallel([
                setTableBusy,
                createOrder
            ], (err, results) => {
                if (err) {
                    setTableFree(req.body.table);
                    removeIncompleteOrder();
                    return;
                }
                dao.findPopulatedById(results[1][0]._id, (err, order) => {
                    res.status(200).json(order);
                });
            });
        } else {
            next(ErrorUtils.BadRequest);
        }

        function setTableBusy(callback) {
            TableService.setAvailability(req.body.table, false, req.user.client, callback);
        }

        function setTableFree(table) {
            TableService.setAvailability(req.body.table, true, '', () => { });
        }

        function createOrder(callback) {
            let order = new Order();
            order.client = req.user.client;
            order.table = req.body.table;
            order.drinks = [];
            order.pizzas = [];
            dao.save(order, callback);
        }

        function removeIncompleteOrder() {
            dao.removeIncompleteOrderByTableId(req.body.table, (err, order) => {
                if (err) {
                    return next(err);
                }
                res.send(200);
            });
        }
    }

    static orderPizza(req, res, next) {
        if (Validator.orderPizza(req.body)) {
            dao.addPizza(req.params.id, req.body.pizza, (err, order) => {
                if (err) {
                    return next(err);
                }
                let pizza = order.pizzas.find(pizza => pizza.id === req.body.pizza);
                let data = {
                    table: order.table.num,
                    client: order.client.name,
                    photo: order.client.photo,
                    description: pizza.name
                };
                io.emit('newOrder', data);
                res.status(200).json(order);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

    static orderDrink(req, res, next) {
        if (Validator.orderDrink(req.body)) {
            dao.addDrink(req.params.id, req.body.drink, (err, order) => {
                if (err) {
                    return next(err);
                }
                let drink = order.drinks.find(drink => drink.id === req.body.drink);
                let data = {
                    table: order.table.num,
                    client: order.client.name,
                    photo: order.client.photo,
                    description: drink.name
                };
                io.emit('newOrder', data);
                res.status(200).json(order);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

    static endOrder(req, res, next) {
        if (Validator.identify(req.params)) {
            dao.endOrder(req.params.id, (err, order) => {
                if (err) {
                    return next(err);
                }
                TableService.setAvailability(order.table, true, '', () => { });
                res.status(200).json(order);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}