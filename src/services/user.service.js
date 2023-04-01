const { users, cars } = require("../models");

class UserService {
  static async add(userData) {
    try {
      const result = await users.create(userData);
      console.log(userData.id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, update) {
    try {
      const userUpdate = await users.update(update, {
        where: { id },
      });
      return userUpdate;
    } catch (error) {
      throw error;
    }
  }
  static async getUser(email) {
    try {
      const user = await users.findOne({
        where: { email },
      });
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
