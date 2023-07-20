const { Project } = require('../models');

class ProjectServices {
  static async createProject(body) {
    try {
      if (!body) throw 'Se espera un objeto';
      const result = await Project.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getProject(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllProjects() {
    try {
      const result = await Project.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateProject(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async deleteProject(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectServices;
