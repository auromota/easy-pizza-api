import GenericDao from './genericDao';
import mongoose from 'mongoose';

let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    facebookId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        requred: true
    }
});

export const Client = mongoose.model('Client', clientSchema);

export class ClientDao extends GenericDao {

    constructor() {
        super(Client);
    }

    save(client, callback) {
        let query = { facebookId: client.facebookId };
        let update = { name: client.name, email: client.email, token: client.token, photo: client.photo };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        Client.findOneAndUpdate(query, update, options, callback);
    }

}