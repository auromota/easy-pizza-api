import * as jwt from 'jsonwebtoken';

export default class JWTUtils {

    /**
     * Do the login with JWT. It uses the JWT_PASS environment variable and creates a token a valid for one day.
     * 
     * @return a token
     */
    static login(payload) {
        return jwt.sign(payload, process.env.JWT_PASS, {
            expiresIn: '1d'
        });
    }

}