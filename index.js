const express = require('express');
const bodyParser = require('body-parser');
const { User, Sale } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

app.get('/', (req, res) => {
  res.send('Bem vindo a Minha API com Sequalize!');
});

app.get('/users', async (req, res) => {
  console.log('Método GET');
  Sale.hasMany(User, {foreignKey: 'userId'})
  User.belongsTo(Sale, {foreignKey: 'userId'})
  const users = await User.findAll({where:{}, include: [Sale]});
  console.log(users)
  res.json({
    response: "Ok",
    message: "Método GET",
    data: users
  }).catch( (reason => res.json({
    response:"Error",
    message:reason
  }))

  )
}); //Listar todos

app.post('/users', async (req, res) => {
  console.log(req.body)
  const user = await User.create(req.body);
  res.json(user);
});

app.post('/Sale', async (req, res) => {
  console.log(req.body)
  const Sales = await Sale.create(req.body);
  res.json(Sales);
});

app.get('/users/:id', (req, res) => { console.log('Método GET') }); //Buscar
app.put('/users/:id', (req, res) => { console.log('Método PUT') }); //Editar
app.delete('/users/:id', (req, res) => { console.log('Método DELETE') }); //Deletar

const port = 8008

app.listen(port, () => console.log(`Servidor rodando na Porta ${port}`));