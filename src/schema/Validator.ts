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
            }
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
            }
        },
            {
                formats: formats
            }
        );
        return validate(data);
    }
}