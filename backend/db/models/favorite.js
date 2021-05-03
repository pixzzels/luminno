'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    listing_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Favorite.associate = function (models) {
    // associations can be defined here
    // Favorite.belongsTo(models.User, { foreignKey: 'user_id' })
    Favorite.belongsTo(models.User, { foreignKey: 'user_id' })
    Favorite.belongsTo(models.Listing, { foreignKey: 'listing_id' })
  };
  return Favorite;
};