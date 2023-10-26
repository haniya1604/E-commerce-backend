const { DataTypes } = require("sequelize");
const sequelize = require("../../common/dbConnection");

const cart = sequelize.define(
  "cart",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    total_items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "cart",
  }
);
module.exports = cart;
