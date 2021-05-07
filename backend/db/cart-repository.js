const { Cart, Listing } = require('./models')

async function listCartItems(id) {
  return await Cart.findAll({
    where: { user_id: id },
    include: [Listing],
  });
}

async function addToCart(data) {
  const { user_id, listing_id } = data;
  content = { user_id, listing_id }
  const cart = await Cart.create(content)
  console.log("cart", cart)
  return cart;
}

async function deleteCartItem(data) {
  const { user_id, listing_id } = data;
  // content = {user_id, listing_id}
  const cart = await Cart.destroy({
    where: {
      user_id, listing_id
    }
  })
  return cart;
}

module.exports = {
  listCartItems,
  addToCart,
  deleteCartItem,
}