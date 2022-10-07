const express = require('express');
const path = require('path');
const apicache = require('apicache');
const config = require('./config.json')

var exphbs = require('express-handlebars');
require('dotenv').config()

const app = express();
let cache = apicache.middleware
const port = process.env.PORT;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'))
app.use('/', require(path.join(__dirname, '/routes/leaderboard')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home', 'home.html'))
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home', 'home.html'))
});
app.get('/commands', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'commands', 'commands.html'))
});
app.get('/instagram', (req, res) => {
    res.redirect(config.socials.instagram)
})
app.get('/twitter', (req, res) => {
    res.redirect(config.socials.twitter)
})
app.get('/discord', (req, res) => {
    res.redirect(config.socials.discord)
})
app.get('/email', (req, res) => {
    res.redirect(config.socials.email)
})
app.get('/github', (req, res) => {
    res.redirect(config.socials.github)
})


// Custom Error Page
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'pages', 'Errors', '404.html'))
})
app.get('/404-cookie', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Assets', 'imgs', 'cookie.gif'))
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
