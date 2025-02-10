const express = require('express');
const app = express(); // Cria uma aplicação express (uma função) que configura rotas, middlewares e etc.
const port = 5000; 
const db = require('./db');
const router = require('./routes/index');

router(app);

// Colocando o servidor no ar (aguardando conexões/rotas => AVISO: Cannot GET /) na porta passada como argumento
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});