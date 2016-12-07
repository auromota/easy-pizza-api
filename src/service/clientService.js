import { Client, ClientDao } from '../database/clientDao';
import * as _ from 'lodash';

const dao = new ClientDao();

export default class ClientService {

    static save(accessToken, refreshToken, profile, done) {
        let client = new Client();
        client.name = profile.name;
        client.email = getHomeEmail(profile);
        client.photo = profile.photos[0];
        client.id = profile.id;
        dao.save(client, (err, client) => {
            if (err) {
                return done(err);
            }
            done(null, client);
        });

        function getHomeEmail(profile) {
            let email = _.find(profile.emails, { type: 'home' });
            if (email) {
                return email.value;
            }
        }
    }

}