const cartService = require("../../service/cartService");

module.exports = {
  getUserCart: async (req, res) => {
    try {
      const cart = await cartService.getUserCart(req.body.userId);
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to retrieve user's cart" });
    }
  },

  addProductToCart: async (req, res) => {
    try {
      const userId = req.body.userId;
      const productId = req.params.id; // Assuming the route parameter is named 'id'
      const totalItems = req.body.total_items;
      const totalPrice = req.body.total_price;

      const cart = await cartService.addProductToCart(
        userId,
        productId,
        totalItems,
        totalPrice
      );

      res.status(201).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add product to cart" });
    }
  },

  removeProductFromCart: async (req, res) => {
    try {
      const cartId = req.params.cartId;
      const productId = req.params.productId;

      const result = await cartService.removeProductFromCart(cartId, productId);
      res
        .status(200)
        .json({ message: "Product removed from cart successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to remove product from cart" });
    }
  },
};
