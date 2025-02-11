const db = require('../db');

class UserModel {

    // CREATE
    create(name, email){
        const query = `INSERT INTO users (name, email) VALUES ('${name}',' ${email}')`;
        return new Promise((res, rej) => {
            db.query(query, (err, results) => {
                if (err) {
                  console.error('Erro ao criar usuários:', err);
                  res.status(500).send('Erro ao criar usuários');
                  return;
                }
                res(results);
              });
        })
    }

    // READ 
     readAll(){
        const query = "SELECT * FROM users";
        return new Promise((res, rej) => {
            db.query(query, (err, results) => {
                if (err) {
                  console.error('Erro ao buscar usuários:', err);
                  res.status(500).send('Erro ao buscar usuários');
                  return;
                }
                res(results);
              });
        })
     }

     readUnique(id){
        const query = `SELECT * FROM users WHERE id = ${id}`;
        return new Promise((res, rej) => {
            db.query(query, (err, results) => {
                if (err) {
                  console.error('Erro ao buscar usuário:', err);
                  res.status(500).send('Erro ao buscar usuários');
                  return;
                }
                res(results);
              });
        })
     }

    // UPDATE
    update(name, email, id){
        const query = `UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id}`;
        return new Promise((res, rej) => {
            db.query(query, (err, results) => {
                if (err) {
                  console.error('Erro ao atualizar usuários:', err);
                  res.status(500).send('Erro ao atualizar usuários');
                  return;
                }
                res(results);
              });
        })
    }

     // delete
     delUser(id){
        const query = `DELETE from users WHERE id = ${id}`;
        return new Promise((res, rej) => {
            db.query(query, (err, results) => {
                if (err) {
                  console.error('Erro ao deletar usuários:', err);
                  res.status(500).send('Erro ao deletar usuários');
                  return;
                }
                res(results);
              });
        })
    }
}

module.exports = new UserModel;