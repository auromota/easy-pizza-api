import * as bcrypt from 'bcrypt-nodejs';

export namespace BCryptUtils {

    export function crypt(data: string): string {
        return bcrypt.hashSync(data, bcrypt.genSaltSync());
    }

    export function verify(plain: string, encrypted: string): boolean {
        return bcrypt.compareSync(plain, encrypted);
    }

}