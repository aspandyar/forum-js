const User = require('../models/user');

const statusCreated = 201;
const statusOK = 200;
const statusBadRequest = 400;

const handleErrors = (err) => {
    console.log(err.message, err.code);
}

// controller actions
module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });

        res.status(statusCreated).json(user)
    }
    catch (err) {
        handleErrors(err);
        res.status(statusBadRequest).send('error, user not created');
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;


    res.send('user login');
}