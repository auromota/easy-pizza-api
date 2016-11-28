import * as Restify from 'restify';
import { Validator } from '../schema/Validator';
import { DrinkService } from '../service/DrinkService';

export class DrinkController {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.createDrink(req.body)) {
            DrinkService.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}