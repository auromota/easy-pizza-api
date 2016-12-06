export default class EasyPizzaError extends Error {

    constructor(statusCode, message) {
        super(message);
        this.name = 'Easy Pizza Error';
        this.statusCode = statusCode;
    }

    toString() {
        return this.name + '[' + this.statusCode + ']: ' + this.message;
    }

}