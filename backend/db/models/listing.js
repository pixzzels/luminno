'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: {
        allowNull: false,
        type: DataTypes.STRING(100),
    },
    listing_img: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT(5, 2),
    },
    category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};