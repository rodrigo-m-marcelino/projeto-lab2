/**
 * Rotas básicas 
 * Server code


// Require the express library
const express = require('express');
// Cria uma aplicação express (uma função) que configura rotas, middlewares e etc.
const app = express();

// Colocando o servidor no ar (aguardando conexões/rotas => AVISO: Cannot GET /) na porta passada como argumento
app.listen(5000, (error) => {
    if (error){
        console.log("Erro ao escutar a porta");
        return;
    }
    console.log("Server is listening")
});

// manipulando rotas com .get()
// 1 param: path
// 2 param: function (request, response)
app.get('/', (req, res, next) => {
    console.log('Here')
    res.send('Hi')
}) 
 */

const express = require('express');
const app = express();
const port = 5000; // ou a porta que desejar
const db = require('./db');

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Exemplo de rota para buscar dados do banco de dados
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      res.status(500).send('Erro ao buscar usuários');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});