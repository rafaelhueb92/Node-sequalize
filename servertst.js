const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let message = 'Bem vindo a Minha API com Sequalize!'

app.get('/', (req, res,next) => {
   // res.send('Bem vindo a Minha API com Sequalize!');
   message += ' Fique a Vontade!'
   next();
});

app.get('/', (req, res) => {
    res.send(message + "\n" + 'Fim');
});

app.post('/users', async (req, res) => {
    console.log(req);
    res.json(req.body);
});

app.post('/Sale', async (req, res) => {
    console.log(`Corpo da requisição ${req.body}`)
    res.json(req.body);
});

const port = 8008

app.listen(port, () => console.log(`Servidor rodando na Porta ${port}`));