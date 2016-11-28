import { BCryptUtils } from '../src/security/BCryptUtils';
import { expect } from 'chai';

describe('bcrypt utils', () => {

    it('should create valid hashes', () => {
        let password = 'password';
        let hash = BCryptUtils.crypt(password);
        expect(BCryptUtils.verify('password', hash)).eq(true);
        expect(BCryptUtils.verify('pass', hash)).eq(false);
    });

});