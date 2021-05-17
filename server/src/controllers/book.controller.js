const model = require('../models');
const asyncHandler = require('../middlewares/asyncHandler');
const { validationResult } = require('express-validator');
const Book = model.Book;

exports.create = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            success: false,
            error: errors.array()
        });
    }
    const newBook = {
        name: req.body.name,
        author: req.body.author
    };
    const book = await Book.create(newBook);
    res.status(201).json(book);
})