'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    total_calories: DataTypes.INTEGER,
    cook_time: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    ingredients: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};