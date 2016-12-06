import Validator from '../schema/validator';
import ToppingService from '../service/ToppingService';

export default class ToppingController {

    static create(req, res, next) {
        if (Validator.createTopping(req.body)) {
            let service = new ToppingService();
            service.create(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

    static update(req, res, next) {
        if (Validator.updateTopping(req.body)) {
            let service = new ToppingService();
            service.update(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

    static remove(req, res, next) {
        if (Validator.removeTopping(req.params)) {
            let service = new ToppingService();
            service.remove(req, res, next);
        } else {
            res.send(400);
            next(false);
        }
    }

}