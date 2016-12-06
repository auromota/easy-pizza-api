import * as Restify from 'restify';
import { ToppingDao } from '../database/topping/ToppingDao';
import { Topping } from '../database/topping/Topping';
import { ITopping } from '../database/topping/ITopping';

export class ToppingService {

    private dao: ToppingDao;

    constructor() {
        this.dao = new ToppingDao();
    }

    public create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        let topping = new Topping();
        topping.name = req.body.name;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        this.dao.save(topping, (err: any, topping: ITopping) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200, topping);
            return next();
        });
    }

    public update(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        let topping = new Topping();
        topping.name = req.body.name;
        topping._id = req.body.id;
        topping.price = req.body.price;
        topping.photo = req.body.photo;
        this.dao.update(Topping, topping, (err: any, topping: ITopping) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200);
            return next();
        });
    }

    public remove(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        this.dao.remove(Topping, req.params.id, (err: any, item: ITopping) => {
            if (err) {
                res.json(400, err);
                return next(false);
            }
            res.json(200);
            return next();
        });
    }

}