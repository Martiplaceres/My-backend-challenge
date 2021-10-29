"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    static associate(models) {
      player.belongsTo(models.team);
    }
  }
  player.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      age: { type: DataTypes.INTEGER, allowNull: false },
      teamId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "player",
    }
  );
  return player;
};
