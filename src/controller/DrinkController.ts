import * as Restify from 'restify';
import { Validator } from '../schema/Validator';
import { DrinkService } from '../service/DrinkService';

export class DrinkController {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.createDrink(req.body)) {
            let service = new DrinkService();
            service.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

    public static update(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.updateDrink(req.body)) {
            let service = new DrinkService();
            service.update(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}