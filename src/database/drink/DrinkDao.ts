import { IDrink } from './IDrink';
import { Drink } from './Drink';

export class DrinkDao {

    public static save(drink: IDrink, callback: (err: any, drink: IDrink) => any): void {
        drink.save(callback);
    }

    public static update(drink: IDrink, callback: (err: any, drink: IDrink) => any): void {
        Drink.findByIdAndUpdate(drink._id, drink, callback);
    }

}