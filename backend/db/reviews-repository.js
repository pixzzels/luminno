const { Review } = require("./models");

async function listReviews() {
  return await Review.findAll();
}

module.exports = {
  listReviews,
}