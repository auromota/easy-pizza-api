import { PizzaDao, Pizza } from '../database/pizzaDao';

const dao = new PizzaDao();

export default class PizzaService {

    static find(req, res, next) {
        dao.findPopulated((err, pizzas) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(pizzas);
        });
    }

    static create(req, res, next) {
        let pizza = new Pizza();
        pizza.name = req.body.name;
        pizza.toppings = req.body.toppings;
        pizza.custom = req.body.custom;
        dao.save(pizza, (err, pizza) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(pizza);
        });
    }

    static update(req, res, next) {
        let pizza = new Pizza();
        pizza._id = req.params.id;
        pizza.name = req.body.name;
        pizza.toppings = req.body.toppings;
        pizza.custom = req.body.custom;
        dao.update(pizza, (err, pizza) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(pizza);
        });
    }

    static remove(req, res, next) {
        dao.remove(req.params.id, (err, pizza) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(pizza);
        });
    }

}