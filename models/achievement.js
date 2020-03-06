import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const AchievementSchema = new Schema({
    date: String,
    user: String,
    unexpected: Boolean,
    project: String,
    category: String,
    description: String,
    scheduled: String,
    actual: String,
    closed: Boolean,
    issues: String,
});

export default mongoose.model('Achievement', AchievementSchema);