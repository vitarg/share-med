const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.post("/selectors", categoriesController.addCategory);
router.get("/selectors", categoriesController.getAllCategories);

module.exports = router;
