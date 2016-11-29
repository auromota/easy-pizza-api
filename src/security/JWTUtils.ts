import * as jwt from 'jsonwebtoken';

export class JWTUtils {

    /**
     * Do the login with JWT. It uses the JWT_PASS environment variable and creates a token a valid for one day.
     * 
     * @return a token
     */
    public static login(payload: any): string {
        return jwt.sign(payload, process.env.JWT_PASS, {
            expiresIn: '1d'
        });
    }
    
}