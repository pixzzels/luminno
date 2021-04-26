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
  Listing.associate = function (models) {
    // associations can be defined here
    Listing.hasMany(models.Review, { foreignKey: 'listing_id' });
    Listing.belongsToMany(models.User, {
      foreignKey: 'listing_id',
      otherKey: 'user_id',
      through: 'Favorite'
    });
    Listing.belongsToMany(models.Tag, {
      foreignKey: 'listing_id',
      otherKey: 'tag_id',
      through: 'ListingsTag'
    });
    Listing.belongsTo(models.Category, { foreignKey: 'category_id' })
  };
  return Listing;
};