import { Drink, DrinkDao } from '../database/drinkDao';

const dao = new DrinkDao();

export default class DrinkService {

    static find(req, res, next) {
        dao.find((err, drinks) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drinks);
        });
    }

    static create(req, res, next) {
        let drink = new Drink();
        drink.name = req.body.name;
        drink.price = req.body.price;
        dao.save(drink, (err, drink) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drink);
        });
    }

    static update(req, res, next) {
        let drink = new Drink();
        drink.name = req.body.name;
        drink._id = req.body._id;
        drink.price = req.body.price;
        dao.update(drink, (err, drink) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drink);
        });
    }

    static remove(req, res, next) {
        dao.remove(req.params.id, (err, drink) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drink);
        });
    }
}