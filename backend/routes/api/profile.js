const express = require('express');
const asyncHandler = require('express-async-handler');

const CartRepository = require('../../db/cart-repository');
const router = express.Router();

router.get(
  '/cart/:id',
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    // console.log('backendId', id)
    const cartItems = await CartRepository.listCartItems(id);
    // console.log('cartItems', cartItems)
    const userCart = cartItems.map((item) => item.Listing)

    return res.json(userCart)
  })
);

router.post(
  '/cart/:id/',
  asyncHandler(async (req, res) => {
    const { listing_id, user_id } = req.body;
    content = { listing_id, user_id };
    // console.log('content', content)
    const item = await CartRepository.addToCart(content);
    return res.json(item);
  })
)

router.delete(
  '/cart/:id/delete',
  asyncHandler(async (req, res) => {
    const { user_id, listing_id } = req.body;
    content = { user_id, listing_id };
    const deletedItem = await CartRepository.deleteCartItem(content)
    return res.json(deletedItem)
  })
)

module.exports = router;