const mongoose = require('mongoose');
const commentSchema = require('./comment');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    state: { type: String, required: true, enum: ['read', 'to_read', 'reading'] },
    comments: [commentSchema]
});

bookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Book', bookSchema);