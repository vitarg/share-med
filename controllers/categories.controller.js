const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });

      res.json("Категория добавлена");
    } catch (e) {
      console.log(e);
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const allCategories = await Category.find();
      res.json(allCategories);
    } catch (e) {
      console.log(e);
    }
  },
};
