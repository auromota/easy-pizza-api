import Validator from '../schema/Validator';
import DrinkService from '../service/DrinkService';
import ErrorUtils from '../error/errorUtils';

export default class DrinkController {

    static create(req, res, next) {
        if (Validator.createDrink(req.body)) {
            let service = new DrinkService();
            service.create(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

    static update(req, res, next) {
        if (Validator.updateDrink(req.body)) {
            let service = new DrinkService();
            service.update(req, res, next);
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}