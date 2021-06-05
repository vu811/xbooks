const asyncHandler = require('../middlewares/asyncHandler');
const { validationResult } = require('express-validator');
const model = require('../models');
const bscrypt = require('bcrypt');
const User = model.User;

const signUp = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({
            success: false,
            error: errors.array()
        });
    }
    const { email, password } = req.body;
    const hashedPassword = await bscrypt.hash(password, 10);
    const newUser = {
        email: email,
        hashedPassword: hashedPassword
    };
    const user = await User.create(newUser);
    res.status(201).json(user);
});

exports.signUp = signUp;