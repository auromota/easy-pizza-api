import validator from 'is-my-json-valid';

const format = {
    email: '/.+@.+/'
};

const Validator = {
    loginPost(data) {
        let validate = validator({
            required: ['username', 'password'],
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' }
            },
            additionalProperties: false
        });
        return validate(data);
    }
};

export default Validator;