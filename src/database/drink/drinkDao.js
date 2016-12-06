import mongoose from 'mongoose';
import GenericDao from '../generic/GenericDao';

export default class DrinkDao extends GenericDao {

    constructor() {
        super();
        this.drink = mongoose.model('Drink');
    }

}