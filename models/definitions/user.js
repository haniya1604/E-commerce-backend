const DataTypes = require("sequelize");
const sequelize = require("../../common/dbConnection");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "user" }
);

module.exports = User;
