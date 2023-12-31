const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/authMidleware');

const PORT = 3000;

const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false })); // get data from form
app.use(express.static('public'));
app.use(express.json()); // way to send json data to auth
app.use(cookieParser()); // set cookie in miidleware

// database and server connection
const DBuri = "mongodb+srv://aspandyar:AkUE6zyIGRZjtWNg@cluster0.fsit9t7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DBuri)
    .then(() => app.listen(PORT))
    .catch((err) => console.log(err))
    .then(console.log("success"));


// routes
app.get('*', checkUser); // to all path

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', requireAuth, (req, res) => {
    res.render('about');
});

app.use(authRoutes);
