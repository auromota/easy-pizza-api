import validator from 'is-my-json-valid';

const format = {
    email: '/.+@.+/'
};

const loginPostValidator = validator({
    required: ['username', 'password'],
    type: 'object',
    properties: {
        username: { type: 'string' },
        password: { type: 'string' }
    },
    additionalProperties: false
});

const tableAvailabilityValidator = validator({
    required: ['availability', 'num', 'client'],
    type: 'object',
    properties: {
        num: { type: 'number' },
        availability: { type: 'boolean' },
        client: { type: 'string' }
    },
    additionalProperties: false
});

const Validator = {
    loginPost(data) {
        return loginPostValidator(data);
    },
    tableAvailability(data) {
        return tableAvailabilityValidator(data);
    }
};

export default Validator;