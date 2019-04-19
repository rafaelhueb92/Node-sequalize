const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get('/', (req, res) => {
  res.send('Bem vindo a Minha API com Sequalize!');
});

app.get('/users', async (req, res) => {
  console.log('Método GET');
  const users = await User.findAll();
  console.log(users)
  res.json({
    response: "Ok",
    message: "Método GET",
    data: users
  })
}); //Listar todos

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/users/:id', (req, res) => { console.log('Método GET') }); //Buscar
app.put('/users/:id', (req, res) => { console.log('Método PUT') }); //Editar
app.delete('/users/:id', (req, res) => { console.log('Método DELETE') }); //Deletar

const port = 8008

app.listen(port, () => console.log(`Servidor rodando na Porta ${port}`));