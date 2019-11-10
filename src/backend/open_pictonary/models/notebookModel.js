import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const NoteScheme = new Schema({
    title: {
        type: String,
        required: "What is the note's title?"
    },
    text: {
        type: String,
        required: "What is the note?"
    },
    date: {
        type: Date,
        default: new Date
    }
});

export default mongoose.model('Note', NoteScheme);