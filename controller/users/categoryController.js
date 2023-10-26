const categoryService = require("../../service/categoryService");

module.exports = {
  getCategories: async (req, res) => {
    try {
      const categories = await categoryService.getCategories();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve categories" });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await categoryService.createCategory(name);
      res.status(201).json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create a new category" });
    }
  },
};
