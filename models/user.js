import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    text: String,
});

export default mongoose.model('User', UserSchema);