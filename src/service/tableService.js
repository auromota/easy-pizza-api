import { Table, TableDao } from '../database/tableDao';
import Validator from '../security/Validator';
import ErrorUtils from '../error/errorUtils';

const dao = new TableDao();

export default class TableService {

    static setAvailability(req, res, next) {
        if (Validator.tableAvailability(req.body)) {
            let table = new Table();
            table.num = req.body.num;
            table.availability = req.body.availability;
            if (!table.availability) {
                table.client = req.body.client;
            }
            dao.updateAvailability(table, (err, table) => {
                if (err) {
                    return next(err);
                }
                res.status(200).json(table);
            });
        } else {
            next(ErrorUtils.BadRequest);
        }
    }

}