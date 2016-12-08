import { Client, ClientDao } from '../database/clientDao';

const dao = new ClientDao();

export default class ClientService {

    static save(accessToken, refreshToken, profile, done) {
        process.nextTick(() => {
            let client = new Client();
            client.name = profile.displayName;
            client.email = profile.emails[0].value;
            client.facebookId = profile.id;
            client.token = accessToken;
            client.photo = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
            dao.save(client, (err, client) => {
                if (err) {
                    return done(err);
                }
                done(err, client);
            });
        });
    }

    static find(req, res, next) {
        dao.find((err, clients) => {
            if (err) {
                return next(err);
            }
            res.status(200).json(clients);
        })
    }

}