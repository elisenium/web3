const router = require('express').Router();
const Book = require('../models/book');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PATCH update book state
router.patch('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        book.state = req.body.state;
        await book.save();
        res.json(book);
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });
    }
});

// POST add a comment to a book
router.post('/:id/comments', async (req, res) => {
    const { username, text } = req.body;

    if (text.length <= 5) {
        return res.status(400).json({ message: 'Comment must be more than 5 characters' });
    }

    if (username.length <= 3) {
        return res.status(400).json({ message: 'Username must be more than 3 characters' });
    }

    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const existingComment = book.comments.find(comment => comment.username === username);
        if (existingComment) {
            return res.status(400).json({ message: 'User has already commented on this book' });
        }

        const comment = { username, text };
        book.comments.push(comment);
        await book.save();

        res.status(201).json({
            bookId: book.id,
            username: comment.username,
            text: comment.text
        });
    } catch (err) {
        res.status(404).json({ message: 'Book not found' });
    }
});

module.exports = router;