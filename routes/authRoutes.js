const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/user/signup', authController.signup_get);

router.post('/user/signup', authController.signup_post);

router.get('/user/login', authController.login_get);

router.post('/user/login', authController.login_post);


module.exports = router;