const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the project.
 *         name:
 *           type: string
 *           description: The name of the project.
 *         path:
 *           type: string
 *           description: The path of the project.
 *         env:
 *           type: string
 *           description: The env of the project.
 *         data:
 *           type: string
 *           description: The data of the project.
 *       example:
 *         id: 1
 *         name: 'api 1'
 *         path: 'Luis1811'
 *         env: 'pass123'
 *         data: 'alfonsouzcategui2@gmail.com'
 *     CreateProject:
 *       type: object
 *       required:
 *         - username
 *         - name
 *         - password
 *         - email
 *       properties:
 *         username:
 *           type: string
 *           description: The username of the project.
 *         name:
 *           type: string
 *           description: The name of the project.
 *         password:
 *           type: string
 *           description: The password of the project.
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the project.
 *       example:
 *         username: 'Luis1811'
 *         name: 'Luis Uzcategui'
 *         password: 'pass123'
 *         email: 'alfonsouzcategui2@gmail.com'
 */

const Project = db.define('project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  env: {
    type: DataTypes.JSON,
    allowNull: false
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  }
});

module.exports = Project;
