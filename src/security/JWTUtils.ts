import * as jwt from 'jsonwebtoken';

export class JWTUtils {

    public static login(payload: any): string {
        return jwt.sign(payload, process.env.JWT_PASS, {
            expiresIn: '1d'
        });
    }
    
}