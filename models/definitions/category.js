const DataTypes = require("sequelize");
const sequelize = require("../../common/dbConnection");

const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "category" }
);

module.exports = Category;
