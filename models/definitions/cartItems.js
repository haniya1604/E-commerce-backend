const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbConnection");

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
  },
  {
    //these are global properties
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "cart_items",
  }
);

module.exports = CartItem;
