import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    user: String,
    project: String,
    category: String,
    description: String,
    closed: Boolean,
})

export default mongoose.model('Task', TaskSchema)
