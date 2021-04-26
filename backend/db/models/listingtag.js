'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingTag = sequelize.define('ListingTag', {
    tag_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    listing_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  ListingTag.associate = function (models) {
    // associations can be defined here
  };
  return ListingTag;
};