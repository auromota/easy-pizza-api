import { Client, ClientDao } from '../database/clientDao';

const dao = new ClientDao();

export default class ClientService {

    static save(accessToken, refreshToken, profile, done) {
        let client = new Client();
        client.name = profile.displayName;
        client.email = profile.emails[0].value;
        client.facebookId = profile.id;
        client.accessToken = accessToken;
        dao.save(client, (err, client) => {
            if (err) {
                return done(err);
            }
            done(null, client);
        });
    }

}