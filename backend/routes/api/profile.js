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


module.exports = router;