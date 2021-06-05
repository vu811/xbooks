const { createBooks } = require('../controllers/book.controller');
const router = require('express').Router();
const createBookValidate = require('../validators/book.validator');

// @route   POST  /api/books
// @desc    Create book
// @access  Private
router.post('/', createBookValidate(), createBooks);

module.exports = router;