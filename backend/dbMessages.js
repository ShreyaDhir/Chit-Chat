import mongoose from 'mongoose';

const chitchatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

//Collection
export default mongoose.model("messagecontents", chitchatSchema)