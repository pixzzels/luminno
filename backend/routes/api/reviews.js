const express = require('express');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');


const ReviewsRepository = require('../../db/reviews-repository')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
  const reviews = await ReviewsRepository.listReviews();
  return res.json(reviews);
}));

const validateReviewPost = [
  check('description')
    .exists({ checkFalse: true })
    .notEmpty()
    .withMessage('Please provide a description for your review'),
  check('score')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a score with your review.'),
  handleValidationErrors,
]

router.post(
  '/',
  validateReviewPost,
  requireAuth,
  asyncHandler(async function (req, res) {
    const { description, score, user_id, listing_id } = req.body;
    content = {
      description,
      score,
      user_id,
      listing_id,
    }
    const review = await ReviewsRepository.createNewReview(content)
    return res.json(review)
  }));

module.exports = router;