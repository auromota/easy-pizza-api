import { EasyPizzaErrorType } from './EasyPizzaErrorType';
import { EasyPizzaError } from './EasyPizzaError';

export class ErrorUtils {

    /**
     * Builds a EasyPizzaError based on a type.
     * 
     * @return an EasyPizzaError, which implements the Error interface
     */
    public static error(type: EasyPizzaErrorType): EasyPizzaError {
        switch (type) {
            case EasyPizzaErrorType.InvalidToken:
                return this.InvalidToken;
            case EasyPizzaErrorType.NoTokenProvided:
                return this.NoTokenProvided;
            case EasyPizzaErrorType.InvalidPassword:
                return this.InvalidPassword;
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

    private static get InvalidPassword(): EasyPizzaError {
        return new EasyPizzaError(403, EasyPizzaErrorType.InvalidPassword, 'Invalid password');
    }
}