const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // ou o endereço do seu servidor MySQL
  user: 'root',
  password: 'root',
  database: 'lab2'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL com sucesso!');
});

module.exports = connection;