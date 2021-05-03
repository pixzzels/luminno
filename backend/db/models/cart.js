'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    listing_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {});
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.belongsTo(models.User, { foreignKey: 'user_id' })
    Cart.belongsTo(models.Listing, { foreignKey: 'listing_id' })

  };
  return Cart;
};