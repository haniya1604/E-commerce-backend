// routers/productRouter.js
const express = require("express");
const router = express.Router();
const productController = require("../controller/users/productController");

router.get("/products", productController.getProducts);

// Get a specific product by ID
router.get("/products/:id", productController.getProductById);

// Create a new product
router.post("/products", productController.createProduct);

// Update an existing product by ID
router.put("/products/:id", productController.updateProduct);

// Delete a product by ID
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
