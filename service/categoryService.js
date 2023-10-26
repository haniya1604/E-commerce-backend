const Category = require("../models/definitions/category"); // Import your Sequelize Category model

module.exports = {
  createCategory: async (name) => {
    try {
      const createdCategory = await Category.create({ name }); // Use the create method directly on the Sequelize model
      return createdCategory;
    } catch (error) {
      throw error; // Propagate the error to handle it at a higher level
    }
  },
  getCategories: async () => {
    try {
      const categories = await Category.findAll(); // Use the findAll method directly on the Sequelize model
      return categories;
    } catch (error) {
      throw error; // Propagate the error to handle it at a higher level
    }
  },
  updateCategory: async (categoryId, updatedCategoryData) => {
    try {
      await Category.update(updatedCategoryData, { where: { id: categoryId } }); // Use the update method directly on the Sequelize model
      return "Category updated successfully";
    } catch (error) {
      throw error; // Propagate the error to handle it at a higher level
    }
  },
  deleteCategory: async (categoryId) => {
    try {
      await Category.destroy({ where: { id: categoryId } }); // Use the destroy method directly on the Sequelize model
      return "Category deleted successfully";
    } catch (error) {
      throw error; // Propagate the error to handle it at a higher level
    }
  },
};
