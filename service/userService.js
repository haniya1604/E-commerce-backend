const User = require("../models/definitions/user");
const bcrypt = require("bcryptjs");
module.exports = {
  getUsers: async () => {
    return await User.findAll();
  },

  createUser: async (userData) => {
    try {
      const createdUser = await User.create(userData);
      return createdUser;
    } catch (error) {
      console.error("Failed to create user:", error);
      throw new Error("User creation failed");
    }
  },

  getUserByEmail: async (email) => {
    return await User.findOne({ where: { email } });
  },

  updateUser: async (userId, updatedUserData) => {
    try {
      await User.update(updatedUserData, { where: { id: userId } });
      return "User updated successfully";
    } catch (error) {
      console.error("Failed to update user:", error);
      throw new Error("User update failed");
    }
  },

  deleteUser: async (userId) => {
    try {
      await User.destroy({ where: { id: userId } });
      return "User deleted successfully";
    } catch (error) {
      console.error("Failed to delete user:", error);
      throw new Error("User deletion failed");
    }
  },

  hashPassword: async (password) => {
    return await bcrypt.hash(password, 10);
  },

  comparePasswords: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  },
};
