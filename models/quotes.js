"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quotes.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Quotes.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
      },
      userId: DataTypes.INTEGER,
      quote: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Quotes",
    }
  );
  return Quotes;
};
