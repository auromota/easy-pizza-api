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
    accessToken: {
        type: String,
        required: true
    }
});

export const Client = mongoose.model('Client', clientSchema);

export class ClientDao extends GenericDao {

    constructor() {
        super(Client);
    }

    save(client, callback) {
        let query = { facebookId: client.facebookId };
        let update = { name: client.name, email: client.email, accessToken: client.accessToken };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        Client.findOneAndUpdate(query, update, options, callback);
    }

}