const express = require('express');
const app = express();
const port = 5000;
const db = require('./db');
const router = require('./routes/index');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000' // **VERIFIQUE SE ESTA PORTA ESTÁ CORRETA**
};

app.use(cors(corsOptions));  // Use as opções de CORS aqui
app.use(express.json()); // Não esqueça de adicionar o middleware para o body parser

router(app); // As rotas devem vir *depois* do CORS e do body-parser

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});