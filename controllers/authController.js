const User = require('../models/user');

const statusCreated = 201;
const statusOK = 200;
const statusBadRequest = 400;

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    if (err.code == 11000) {
        errors.email = 'that email is already used'
    }

    return errors;
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
        const errors = handleErrors(err);
        res.status(statusBadRequest).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;


    res.send('user login');
}