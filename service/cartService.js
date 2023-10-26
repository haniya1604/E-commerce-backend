const { models } = require("../models/definitions/cart");

module.exports = {
  // ... (other functions)

  addProductToCart: async (data, productId) => {
    try {
      // ... (previous code)

      // Update total_items and total_price
      const totalItems = cart.products.length; // Count the total number of products in the cart
      const totalPrice = cart.products.reduce(
        (acc, product) => acc + product.price,
        0
      ); // Calculate the total price of products in the cart

      // Update the cart's total_items and total_price
      await cart.update({
        total_items: totalItems,
        total_price: totalPrice,
      });

      return cart;
    } catch (error) {
      throw new Error("Error adding product to cart: " + error.message);
    }
  },

  // ... (other functions)
};
