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

const openOrderValidator = validator({
    required: ['table'],
    type: 'object',
    properties: {
        table: { type: 'string' }
    },
    additionalProperties: false
});

const orderPizzaValidator = validator({
    required: ['pizza'],
    type: 'object',
    properties: {
        pizza: { type: 'string' }
    },
    additionalProperties: false
});

const orderDrinkValidator = validator({
    required: ['drink'],
    type: 'object',
    properties: {
        drink: { type: 'string' }
    },
    additionalProperties: false
});

const findOrderValidator = validator({
    required: ['id'],
    type: 'object',
    properties: {
        id: { type: 'string' }
    },
    additionalProperties: false
});

const Validator = {
    loginPost(data) {
        return loginPostValidator(data);
    },
    openOrder(data) {
        return openOrderValidator(data);
    },
    orderPizza(data) {
        return orderPizzaValidator(data);
    },
    orderDrink(data) {
        return orderDrinkValidator(data);
    },
    findOrder(data) {
        return findOrderValidator(data);
    }
};

export default Validator;