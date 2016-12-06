import ToppingDao from '../database/topping/ToppingDao';
import Topping from '../database/topping/Topping';

export default class ToppingService {

    static create(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        ToppingDao.save(topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
            return next();
        });
    }

    static update(req, res, next) {
        let topping = new Topping();
        topping.name = req.body.name;
        topping._id = req.body.id;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        ToppingDao.update(Topping, topping, (err, topping) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(topping);
            return next();
        });
    }

    static remove(req, res, next) {
        ToppingDao.remove(Topping, req.params.id, (err, item) => {
            if (err) {
                return next(err);
            }
            res.status(200);
        });
    }

}