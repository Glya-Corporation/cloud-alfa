const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

/**
* @openapi
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The id of the user.
*         username:
*           type: string
*           description: The username of the user.
*         name:
*           type: string
*           description: The name of the user.
*         password:
*           type: string
*           description: The password of the user.
*         email:
*           type: string
*           format: email
*           description: The email of the user.
*       example:
*         id: 1
*         username: 'Luis1811'
*         name: 'Luis Uzcategui'
*         password: 'pass123'
*         email: 'alfonsouzcategui2@gmail.com'
*     CreateUser:
*       type: object
*       required:
*         - username
*         - name
*         - password
*         - email
*       properties:
*         username:
*           type: string
*           description: The username of the user.
*         name:
*           type: string
*           description: The name of the user.
*         password:
*           type: string
*           description: The password of the user.
*         email:
*           type: string
*           format: email
*           description: The email of the user.
*       example:
*         username: 'Luis1811'
*         name: 'Luis Uzcategui'
*         password: 'pass123'
*         email: 'alfonsouzcategui2@gmail.com'
*/

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
}, {
    hooks: {
        beforeCreate: (data, options) => {
            const { password } = data;
            const hash = bcrypt.hashSync(password, 8);
            data.password = hash;
        }
    }
});

module.exports = User;