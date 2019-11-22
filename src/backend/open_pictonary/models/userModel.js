import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const UserSchema = new Schema({
    email: String,
    password: String,

});

export default mongoose.model('User', UserSchema);
