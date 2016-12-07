import {ToppingDao, Topping} from '../database/topping/ToppingDao';

const dao = new ToppingDao();

export default class ToppingService {

    static find(req, res, next) {
        dao.find();
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
        topping._id = req.body.id;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        dao.update(Topping, topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
        });
    }

    static remove(req, res, next) {
        dao.remove(Topping, req.params.id, (err, item) => {
            if (err) {
                return next(err);
            }
            res.status(200);
        });
    }

}