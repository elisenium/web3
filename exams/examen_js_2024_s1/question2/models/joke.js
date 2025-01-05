const mongoose = require('mongoose');
const commentSchema = require('./comment');

const jokeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    joke: { type: String, required: true },
    imageUrl: { type: String, required: true },
    comments: [commentSchema]
});

jokeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject._id = { $oid: document._id.toString() };
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Joke', jokeSchema);