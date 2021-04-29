const express = require('express');
const asyncHandler = require('express-async-handler');

const ReviewsRepository = require('../../db/reviews-repository')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
  const reviews = await ReviewsRepository.listReviews();
  return res.json(reviews);
}));

router.post('/', asyncHandler(async function (req, res) {
  const review = await ReviewsRepository.createNewReview()
  return res.json(review)
}));

module.exports = router;