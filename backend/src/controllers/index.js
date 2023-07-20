const { createUser, getUser, getAllUser, updateUser, deleteUser } = require('./user.controller.js');
const { createProject, getProject, getAllProjects, updateProject, deleteProject } = require('./project.controller.js');


module.exports = {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
  createProject,
  getProject,
  getAllProjects,
  updateProject,
  deleteProject
};
