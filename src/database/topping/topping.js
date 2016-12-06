import mongoose from 'mongoose';

let toppingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: false
    }
});

export default mongoose.model('Topping', toppingSchema);