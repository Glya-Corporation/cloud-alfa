const { Router } = require('express');
const { createUser, getUser, getAllUser, updateUser, deleteUser } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware.js');

const router = Router();

/**
* @openapi
* /api/v1/user:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Create a new user
*     tags: [User]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CreateUser'
*     responses:
*       201:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
* /api/v1/user/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Create a new user
*     tags: [User]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
* /api/v1/users:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Create a new user
*     tags: [User]
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/User'
*/

router.post('/user', createUser);

router.get('/user/:id', authenticate, getUser);

router.get('/users', /* authenticate, */ getAllUser);

router.put('/user/:id/update', authenticate, updateUser);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;
