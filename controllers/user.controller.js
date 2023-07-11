const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    const users = await User.find({});

    res.json({
        status: 'ok',
        users
    })
}

exports.createUser = async (req, res, next) => {
    const user = await User.create(req.body);
    res.json({
        status: 'ok',
        user
    })
}