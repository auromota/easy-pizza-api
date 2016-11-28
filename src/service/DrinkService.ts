import * as Restify from 'restify';
import { DrinkDao } from '../database/drink/DrinkDao';
import { Drink } from '../database/drink/Drink';
import { IDrink } from '../database/drink/IDrink';

export class DrinkService {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        let drink = new Drink();
        drink.name = req.body.name;
        drink.price = req.body.price;
        DrinkDao.save(drink, (err: any, drink: IDrink) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200, drink);
            return next();
        });
    }

}