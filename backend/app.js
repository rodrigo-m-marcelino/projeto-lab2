/**
 * Rotas básicas 
 * Server code
 */

// Require the express library
const express = require('express');

// Cria uma aplicação express (uma função) que configura rotas, middlewares e etc.
const app = express();

// Colocando o servidor no ar (aguardando conexões/rotas => AVISO: Cannot GET /) na porta passada como argumento
app.listen(3000);

// manipulando rotas com .get()
// 1 param: path
// 2 param: function (request, response)
app.get('/', (request, response) => {
    console.log('Here')
    // response.send('Hi') -> Enviando a resposta ao cliente quando alguém acessar o endpoint '/'
    // response.sendStatus(200) -> Enviando um HTTP Status Code
    response.render('../frontend/src/pages/App.js')
})