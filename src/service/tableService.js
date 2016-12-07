import { Table, TableDao } from '../database/tableDao';
import Validator from '../security/Validator';
import ErrorUtils from '../error/errorUtils';
import * as _ from 'lodash';

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

    static find(req, res, next) {
        dao.findPopulated((err, tables) => {
            if (err) {
                return next(err);
            }
            let sorted = _.sortBy(tables, ['num']);
            res.status(200).json(sorted);
        });
    }

}