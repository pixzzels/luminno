'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingTag = sequelize.define('ListingTag', {
    tags_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    listings_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
  }, {});
  ListingTag.associate = function(models) {
    // associations can be defined here
  };
  return ListingTag;
};