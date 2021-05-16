const { body } = require('express-validator');

const createBook = () =>
[
    body('name').isLength({ min: 6 }).withMessage("'name' must have at least 6 characters"),
    body('author').isLength({ min: 6 }).withMessage("'author' must have at least 6 characters")
]
module.exports = createBook;