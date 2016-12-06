import * as Restify from 'restify';
import { Validator } from '../schema/Validator';
import { ToppingService } from '../service/ToppingService';

export class ToppingController {

    public static create(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.createTopping(req.body)) {
            let service = new ToppingService();
            service.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

    public static update(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.updateTopping(req.body)) {
            let service = new ToppingService();
            service.update(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

    public static remove(req: Restify.Request, res: Restify.Response, next: Restify.Next): void {
        if (Validator.removeTopping(req.params)) {
            let service = new ToppingService();
            service.remove(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}