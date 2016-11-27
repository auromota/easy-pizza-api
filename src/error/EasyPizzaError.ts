import { EasyPizzaErrorType } from './EasyPizzaErrorType';
import { DefiniteHttpError } from 'restify';

export class EasyPizzaError implements Error {

    public name: string = 'Easy Pizza Error';
    public statusCode: number;
    public type: EasyPizzaErrorType;
    public message: string;

    constructor(statusCode: number, type: EasyPizzaErrorType, message: string) {
        this.statusCode = statusCode;
        this.type = type;
        this.message = message;
    }

    toString() {
        return this.name + '[' + this.type + ']: ' + this.message + ', status code: ' + this.statusCode;
    }

}