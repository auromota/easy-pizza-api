import { EasyPizzaErrorType } from './EasyPizzaErrorType';
import { EasyPizzaError } from './EasyPizzaError';

export class ErrorUtils {

    static error(type: EasyPizzaErrorType): Error {
        switch (type) {
            case EasyPizzaErrorType.InvalidToken:
                return this.InvalidToken;
            case EasyPizzaErrorType.NoTokenProvided:
                return this.NoTokenProvided;
            default:
                throw Error('Error implementation is missing.');
        }
    }

    private static get InvalidToken(): EasyPizzaError {
        return new EasyPizzaError(403, EasyPizzaErrorType.InvalidToken, 'Failed to authenticate token');
    }

    private static get NoTokenProvided(): EasyPizzaError {
        return new EasyPizzaError(403, EasyPizzaErrorType.NoTokenProvided, 'No token provided');
    }
}