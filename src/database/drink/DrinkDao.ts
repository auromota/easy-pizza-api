import { IDrink } from './IDrink';
import { Drink } from './Drink';

export class DrinkDao {

    public static save(drink: IDrink, callback: (err: any, drink: IDrink) => any): void {
        drink.save(callback);
    }

}