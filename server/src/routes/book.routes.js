module.exports = app => {
    const controller = require('../controllers/book.controller.js');
    const router = require('express').Router();

    router.post('/', controller.create);

    app.use('/api/books', router);
}