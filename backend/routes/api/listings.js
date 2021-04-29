const express = require('express');
const asyncHandler = require('express-async-handler');

// const { User } = require('../../db/models');
const ListingsRepository = require('../../db/listings-repository')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
  const listing = await ListingsRepository.listListing();
  return res.json(listing);
}));

router.get('/:id', asyncHandler(async function (req, res) {
  console.log("req.params", req.params)
  const listing = await ListingsRepository.listOneListing(req.params.id);
  // const { id } = req.params.id;
  return res.json(listing);
}));


module.exports = router;