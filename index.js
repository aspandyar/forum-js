const express = require('express')
const ejs = require('ejs')

const PORT = 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    let data = {username: req.params.username, abouts: ['Football', 'Basketball', 'Vollewbal']}
    res.render('user', data)
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})