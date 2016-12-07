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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    }
});;

export const Table = mongoose.model('Table', tableSchema);

export class TableDao extends GenericDao {

    constructor() {
        super(Table);
    }

    findPopulated(callback) {
        Table.find().populate('client').exec(callback);
    }

    updateAvailability(table, callback) {
        let query = { num: table.num };
        let update = { availability: table.availability, client: table.client };
        let options = { new: true };
        Table.findOneAndUpdate(query, update, options, callback);
    }

}