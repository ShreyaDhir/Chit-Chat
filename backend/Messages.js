import mongoose from 'mongoose';

const schema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

//Collection
export default mongoose.model('messagecontents', schema)