const router = require('express').Router();
const Joke = require('../models/joke');


/* GET all jokes */ 
router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find({});
        res.json(jokes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* GET all jokes with comments */
router.get('/comments/all', async (req, res) => {
    try {
        const jokes = await Joke.find({});
        const jokesWithComments = jokes.map(j => ({
            id: j.id,
            name: j.name,
            joke: j.joke,
            imageUrl: j.imageUrl,
            comments: j.comments.map(comment => ({
                username: comment.username,
                text: comment.text
            }))
        }));
        res.json(jokesWithComments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/* POST add a comment to a joke */ 
router.post('/:id/comments', async (req, res) => {
    const { username, text } = req.body;

    if (text.length <= 5) {
        return res.status(400).json({ message: 'Comment must be more than 5 characters' });
    }

    if (username.length <= 3) {
        return res.status(400).json({ message: 'Username must be more than 3 characters' });
    }

    try {
        const joke = await Joke.findById(req.params.id);
        if (!joke) {
            return res.status(404).json({ message: 'Joke not found' });
        }

        const existingComment = joke.comments.find(comment => comment.username === username);
        if (existingComment) {
            return res.status(400).json({ message: 'User has already commented on this joke' });
        }

        const comment = { username, text };
        joke.comments.push(comment);
        await joke.save();

        res.status(201).json({
            jokeId: joke.id,
            username: comment.username,
            text: comment.text
        });
    } catch (err) {
        res.status(404).json({ message: 'Joke not found' });
    }
});

module.exports = router;