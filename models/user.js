import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    full_name: String,
});

export default mongoose.model('User', UserSchema);