const { Review, User } = require("./models");

async function listReviews() {
  return await Review.findAll({
    include: [User]
  });
}

module.exports = {
  listReviews,
}