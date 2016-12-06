import EasyPizzaError from './easyPizzaError';

export default class ErrorUtils {

    static get InvalidToken() {
        return new EasyPizzaError(403, 'Failed to authenticate token');
    }

    static get NoTokenProvided() {
        return new EasyPizzaError(403, 'No token provided');
    }

    static get InvalidPassword() {
        return new EasyPizzaError(403, 'Invalid password');
    }

}