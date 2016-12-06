import ToppingDao from '../database/topping/ToppingDao';
import Topping from '../database/topping/Topping';

export default class ToppingService {

    constructor() {
        this.dao = new ToppingDao();
    }

    create(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        this.dao.save(topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
            return next();
        });
    }

    update(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping._id = req.body.id;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        this.dao.update(Topping, topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
            return next();
        });
    }

    remove(req, res, next) {
        this.dao.remove(Topping, req.params.id, (err, item) => {
            if (err) {
                return next(err);
            }
            res.status(200);
        });
    }

}