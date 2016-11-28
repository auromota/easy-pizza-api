import * as validator from 'is-my-json-valid';

export namespace Validator {

    let formats: {
        email: '/.+@.+/'
    };

    export function loginPost(data: any): boolean {
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

    export function createUser(data: any): boolean {
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
    }

    export function createDrink(data: any): boolean {
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
    }
}