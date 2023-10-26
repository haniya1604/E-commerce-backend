const Product = require("../models/definitions/product");

module.exports = {
  createProduct: async (productData) => {
    try {
      const createdProduct = await Product.create(productData);
      return createdProduct;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create a new product");
    }
  },
  getProductById: async (productId) => {
    const product = await Product.findByPk(productId);
    return product;
    ``;
  },
  getAllProducts: async () => {
    const products = await Product.findAll();
    return products;
  },
  updateProduct: async (productId, updatedProductData) => {
    await Product.update(updatedProductData, { where: { id: productId } });
    return "Product updated successfully";
  },
  deleteProduct: async (productId) => {
    await Product.destroy({ where: { id: productId } });
    return "Product deleted successfully";
  },
};
