const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

// CREATE
router.post('/users', (req, res) => {
    userController.create(req.body) // Passando o body para o controller
      .then(user => res.status(201).json(user)) // Status 201 para criação
      .catch(error => res.status(400).json(error));
});

// READ all users
router.get('/users', (req, res) => {
    userController.readAll()
      .then(users => res.status(200).json(users))
      .catch(error => res.status(400).json(error));
});

// READ unique user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userController.readUnique(id)
      .then(user => {
            if (!user) { // Verifica se o usuário foi encontrado
              return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.status(200).json(user)
        })
      .catch(error => res.status(400).json(error));
});

// UPDATE
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    userController.update(id, req.body) // Passando o body para o controller
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
});

// DELETE
router.delete('/users/:id', (req, res) => { // Corrigido o método para DELETE
    const { id } = req.params;
    userController.delUser(id)
      .then(() => res.status(204).end()) // Status 204 para DELETE (sem conteúdo)
      .catch(error => res.status(400).json(error));
});

module.exports = router;