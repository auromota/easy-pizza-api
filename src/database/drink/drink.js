import mongoose from 'mongoose';

let drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Drink', drinkSchema);