const { User, Project } = require("./index");

const initModels = () => {
  User.hasMany(Project, { as: 'project', foreignKey: 'user_id' });
  Project.belongsTo(User, { as: 'owner', foreignKey: 'user_id' });
};

module.exports = initModels;