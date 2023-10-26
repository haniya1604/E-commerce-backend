// routers/categoryRouter.js
const express = require("express");
const router = express.Router();
const categoryController = require("../controller/users/categoryController");

router.get("/categories", categoryController.getCategories);

// Create a new category
router.post("/categories", categoryController.createCategory);

// Add more routes as needed

module.exports = router;
