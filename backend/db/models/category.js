'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Listing, { foreignKey: 'category_id' })

  };
  return Category;
};