import { Drink, DrinkDao } from '../database/drinkDao';

const dao = new DrinkDao();

export default class DrinkService {

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
        drink._id = req.body.id;
        drink.price = req.body.price;
        dao.update(drink, (err, drink) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drink);
        });
    }

}