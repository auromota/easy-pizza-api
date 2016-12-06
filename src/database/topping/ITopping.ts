import { Document, Types } from 'mongoose';

export interface ITopping extends Document {
    _id: Types.ObjectId,
    name: string,
    price: number,
    photo: string
}