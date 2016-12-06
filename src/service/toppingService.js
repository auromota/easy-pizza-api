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
                res.json(400, err);
                return next(false);
            }
            res.json(200, topping);
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
                res.json(400, err);
                return next(false);
            }
            res.json(200);
            return next();
        });
    }

    remove(req, res, next) {
        this.dao.remove(Topping, req.params.id, (err, item) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200);
            return next();
        });
    }

}