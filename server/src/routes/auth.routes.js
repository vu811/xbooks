const { signUp } = require('../controllers/auth.controller');
const router = require('express').Router();

// @route   POST  /api/auth/signup
// @desc    Sign Up
// @access  Private
router.post('/signup', signUp);

module.exports = router;