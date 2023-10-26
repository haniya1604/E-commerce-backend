const productService = require("../../service/productService");

module.exports = {
  getProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts(); // Use productService to get all products
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve products" });
    }
  },

  // Get a specific product by ID
  getProductById: async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await productService.getProductById(productId); // Use productService to get a product by ID

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve the product" });
    }
  },

  // Create a new product
  createProduct: async (req, res) => {
    try {
      // Get the product data from the request body
      const productData = req.body;

      // Use the productService to create a new product
      const createdProduct = await productService.createProduct(productData);

      // Respond with the created product and a 201 status code
      res.status(201).json(createdProduct);
    } catch (error) {
      // Handle errors and return a 500 error response
      console.error(error);
      res.status(500).json({ error: "Failed to create a new product" });
    }
  },

  // Update an existing product by ID
  updateProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      const updatedProductData = req.body;

      // Use productService to update the product
      const updatedProduct = await productService.updateProduct(
        productId,
        updatedProductData
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update the product" });
    }
  },

  // Delete a product by ID
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      // Use productService to delete the product
      const result = await productService.deleteProduct(productId);

      if (!result) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete the product" });
    }
  },
};
