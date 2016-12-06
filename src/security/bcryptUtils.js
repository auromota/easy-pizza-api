import * as bcrypt from 'bcrypt-nodejs';

export default class BCryptUtils {

    static crypt(data) {
        return bcrypt.hashSync(data, bcrypt.genSaltSync());
    }

    static verify(plain, encrypted) {
        return bcrypt.compareSync(plain, encrypted);
    }

}