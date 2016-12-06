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
    },

    createUser(data) {
        let validate = validator({
            required: ['username', 'password', 'email'],
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
                email: { type: 'string', format: 'email' },
            },
            additionalProperties: false
        },
            {
                formats: formats
            }
        );
        return validate(data);
    },

    createDrink(data) {
        let validate = validator({
            required: ['name', 'price'],
            type: 'object',
            properties: {
                name: { type: 'string' },
                price: { type: 'number' }
            },
            additionalProperties: false
        });
        return validate(data);
    },

    updateDrink(data) {
        let validate = validator({
            required: ['id', 'name', 'price'],
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                price: { type: 'number' }
            },
            additionalProperties: false
        });
        return validate(data);
    },

    createTopping(data) {
        let validate = validator({
            required: ['name', 'price'],
            type: 'object',
            properties: {
                name: { type: 'string' },
                price: { type: 'number' },
                photo: { type: 'string' }
            },
            additionalProperties: false
        });
        return validate(data);
    },

    updateTopping(data) {
        let validate = validator({
            required: ['id', 'name', 'price'],
            type: 'object',
            properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                price: { type: 'number' },
                photo: { type: 'string' }
            },
            additionalProperties: false
        });
        return validate(data);
    },

    removeTopping(data) {
        let validate = validator({
            required: ['id'],
            type: 'object',
            properties: {
                id: { type: 'string' }
            },
            additionalProperties: false
        });
        return validate(data);
    }
};

export default Validator;