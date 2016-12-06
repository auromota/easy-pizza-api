export default class EasyPizzaError extends Error {

    constructor(statusCode, message) {
        super();
        this.name = 'Easy Pizza Error';
        this.statusCode = statusCode;
        this.message = message;
    }

    toString() {
        return this.name + '[' + this.statusCode + ']: ' + this.message;
    }

}