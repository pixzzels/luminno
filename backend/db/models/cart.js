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

  };
  return Cart;
};