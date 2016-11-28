import { Document, Types } from 'mongoose';

export interface IDrink extends Document {
    _id: Types.ObjectId,
    name: string,
    price: number
}