import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    client_id: {
        type: String,
        required: true
    },
          
    isActive: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});

export default mongoose.model('Booking', bookingSchema);