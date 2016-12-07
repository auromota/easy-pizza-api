import mongoose from 'mongoose';
import GenericDao from './genericDao';

let tableSchema = new mongoose.Schema({
    num: {
        type: Number,
        required: true,
        unique: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    client: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});;

export const Table = mongoose.model('Table', tableSchema);

export class TableDao extends GenericDao {

    constructor() {
        super(Table);
    }

    findAvailableTables(callback) {
        let query = { availability: true };
        Table.find(query, callback);
    }

    updateAvailability(table, callback) {
        let query = { num: table.num };
        let update = { availability: table.availability, client: table.client };
        let options = { new: true };
        Table.findOneAndUpdate(query, update, options, callback);
    }

}