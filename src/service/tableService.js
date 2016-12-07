import { Table, TableDao } from '../database/tableDao';
import * as _ from 'lodash';

const dao = new TableDao();

export default class TableService {

    /**
     * Set a new status to the table.
     * Depending on the availability, it will also set the client in the table.
     * 
     * @param {string} id 
     * @param {boolean} availability
     * @param {string} client
     * @param {callback} callback
     */
    static setAvailability(id, availability, client, callback) {
        let table = new Table();
        table._id = id;
        table.availability = availability;
        if (!table.availability) {
            table.client = client;
        }
        dao.updateAvailability(table, callback);
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