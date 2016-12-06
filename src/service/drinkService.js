import DrinkDao from '../database/drink/DrinkDao';
import Drink from '../database/drink/Drink';

export default class DrinkService {

    static create(req, res, next) {
        let drink = new Drink();
        drink.name = req.body.name;
        drink.price = req.body.price;
        DrinkDao.save(drink, (err, drink) => {
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
        DrinkDao.update(Drink, drink, (err, drink) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(drink);
        });
    }

}