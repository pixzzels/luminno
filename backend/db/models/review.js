'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    description: {
      allowNull: false,
      type: DataTypes.STRING(300),
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    listing_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'user_id' })
    Review.belongsTo(models.Listing, { foreignKey: 'listing_id' })
  };
  return Review;
};