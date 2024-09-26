import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
   
}, {timestamps: true});

export default mongoose.model('Blog', blogSchema);