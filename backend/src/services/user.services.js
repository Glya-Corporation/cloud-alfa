const { User } = require('../models');

class UserServices {
  static async createUser(body) {
    try {
      if (!body) throw 'Se espera un objeto';
      const result = await User.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUser(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers() {
    try {
      const result = await User.findAll();
      return result
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, body) {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
