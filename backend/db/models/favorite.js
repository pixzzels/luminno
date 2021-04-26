'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    users_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    listings_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};