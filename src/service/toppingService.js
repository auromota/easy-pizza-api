import { ToppingDao, Topping } from '../database/toppingDao';

const dao = new ToppingDao();

export default class ToppingService {

    static find(req, res, next) {
        dao.find((err, toppings) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(toppings);
        });
    }

    static create(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        dao.save(topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
        });
    }

    static update(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping._id = req.params.id;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        dao.update(topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
        });
    }

    static remove(req, res, next) {
        dao.remove(req.params.id, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
        });
    }

}