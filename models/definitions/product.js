const DataTypes = require("sequelize");
const sequelize = require("../../common/dbConnection");

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "product" }
);

module.exports = Product;
