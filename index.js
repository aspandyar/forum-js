const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: false })); // get data from form
app.use(express.static('public'));

// database and server connection
const DBuri = "mongodb+srv://aspandyar:AkUE6zyIGRZjtWNg@cluster0.fsit9t7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DBuri)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));


// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/user/:username', (req, res) => {
    let data = { username: req.params.username, abouts: ['Football', 'Basketball', 'Vollewbal'] };
    res.render('user', data);
});

app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if (username == "")
        return res.redirect('/');
    else
        return res.redirect('/user/' + username);
});
