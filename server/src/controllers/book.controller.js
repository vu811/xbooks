const model = require('../models')
const Book = model.Book

exports.create = async (req, res) => {
    //TODO: validate request
    const newBook = {
        name: req.body.name,
        author: req.body.author
    };
    console.log('no', req.body)
    try {
        const book = await Book.create(newBook);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json('Error: '+ error);
    }
}