import { Strategy as FacebookStrategy } from 'passport-facebook';
import getFacebookConfig from '../config/facebookConfig';
import ClientService from '../service/clientService';

const configPassport = (passport) => {
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((user, cb) => cb(null, user));

    passport.use(new FacebookStrategy(getFacebookConfig(), ClientService.save));
};

export default configPassport;