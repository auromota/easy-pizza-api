import { Document, Model } from 'mongoose';

export abstract class GenericDao<T extends Document> {

    public save(item: T, callback: (err: any, item: T) => any): void {
        item.save(callback);
    }

    public update(model: Model<T>, item: T, callback: (err: any, item: T) => any): void {
        model.findByIdAndUpdate(item._id, item, callback);
    }

    public remove(model: Model<T>, id: number, callback: (err: any, item: T) => any): void {
        model.findByIdAndRemove(id, callback);
    }

}