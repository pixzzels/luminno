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

    return res.json(cartItems)
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


module.exports = router;