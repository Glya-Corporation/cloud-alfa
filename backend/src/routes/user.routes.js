const { Router } = require('express');
const { } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware.js');

const router = Router();

router.post('/user', createUser);

router.get('/user/:id', authenticate, getUser);

router.get('/users', authenticate, getAllUser);

router.put('/user/:id/update', authenticate, updateUser);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;
