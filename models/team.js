"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    static associate(models) {
      team.hasMany(models.player);
    }
  }
  team.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
      titles: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "team",
    }
  );
  return team;
};
