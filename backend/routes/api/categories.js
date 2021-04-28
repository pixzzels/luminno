const express = require('express');
const asyncHandler = require('express-async-handler');


const ListingsRepository = require('../../db/listings-repository')

const router = express.Router();

// List Categories
router.get('/', asyncHandler(async function(_req, res) {
  const category = await ListingsRepository.listCategory();
  // console.log("category", category)
  return res.json(category);
}));

module.exports = router;