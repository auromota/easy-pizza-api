import { Client, ClientDao } from '../database/clientDao';
import * as _ from 'lodash';

const dao = new ClientDao();

export default class ClientService {

    static save(accessToken, refreshToken, profile, done) {
        let client = new Client();
        client.name = profile.displayName;
        client.email = profile.emails[0].value;
        client.facebookId = profile.id;
        client.accessToken = accessToken;
        dao.save(client, (err, client) => {
            console.log(err);
            console.log(client);
            if (err) {
                return done(err);
            }
            done(null, client);
        });
    }

}