const express = require('express');
const path = require('path');
var exphbs = require('express-handlebars');
require('dotenv').config()

const app = express();
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


// Custom Error Page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Errors', '404.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
