import { Order, OrderDao } from '../database/orderDao';
import TableService from './tableService';
import Validator from '../security/validator';
import ErrorUtils from '../error/errorUtils';
import async from 'async';

const dao = new OrderDao();

export default class OrderService {

    static findOrder(req, res, next) {
        if (Validator.findOrder(req.params)) {
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
                    setTableFree();
                    removeIncompleteOrder();
                    return;
                }
                res.status(200).json(results[1][0]);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }

        function setTableBusy(callback) {
            TableService.setAvailability(req.body.table, false, req.user.client, callback);
        }

        function setTableFree() {
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
                res.status(200).json(order);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}