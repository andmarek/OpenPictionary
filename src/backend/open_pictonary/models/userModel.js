import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const UserSchema = new Schema({
    user_name : String,
    email: String,
    password: String,
    is_game_manager : Boolean,
});

export default mongoose.model('User', UserSchema);
