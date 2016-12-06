import Validator from '../schema/validator';
import ToppingService from '../service/ToppingService';
import ErrorUtils from '../error/errorUtils';

export default class ToppingController {

    static create(req, res, next) {
        if (Validator.createTopping(req.body)) {
            let service = new ToppingService();
            service.create(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

    static update(req, res, next) {
        if (Validator.updateTopping(req.body)) {
            let service = new ToppingService();
            service.update(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

    static remove(req, res, next) {
        if (Validator.removeTopping(req.params)) {
            let service = new ToppingService();
            service.remove(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}