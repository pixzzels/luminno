const { Review, User } = require("./models");

async function listReviews() {
  return await Review.findAll({
    include: [User]
  });
}

async function createNewReview(content) {
  const review = await Review.create(content);
  // return review;
  return newReview = await Review.findOne({
    where: {
      id: review.id
    },
    include: User
  });
};

async function updateReview(content) {
  const id = details.id;
  delete details.id;
  console.log({ details, id });
  await Review.update(
    content,
    { where: { id } }
  );
  return await Review.findByPk(id);
}

async function deleteReview(reviewId) {
  const review = await Review.findByPk(reviewId);
  console.log('newnewreviewId', reviewId)
  if (!review) throw new Error('Cannot find item');

  await Review.destroy({ where: { id: review.id } });
  return Review.id;
  // const review = await Review.destroy({
  //   where: {
  //     id: req.params.id
  //   }
  // });
}



module.exports = {
  listReviews,
  createNewReview,
  updateReview,
  deleteReview,
}