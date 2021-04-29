const { Review, User } = require("./models");

async function listReviews() {
  return await Review.findAll({
    include: [User]
  });
}

async function createNewReview() {
  const review = await Review.create(req.body);
  return newReview = await Review.findOne({
    where: {
      id: review.id
    },
    include: User
  });
};

module.exports = {
  listReviews,
  createNewReview,
}