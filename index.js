
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));
app.get('/home', (req, res) => res.sendFile(__dirname+'/home.html'));
app.get('/commands', (req, res) => {
    res.sendFile(__dirname+'/commands/commands.html')
    res.sendFile(__dirname+"/css/style.css")
});

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
