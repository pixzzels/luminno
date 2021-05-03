const { Category, Listing } = require("./models");

async function listCategory() {
  return await Category.findAll();
}

async function listListing() {
  return await Listing.findAll({
    include: Category
  });
}

async function listOneListing(id) {
  return await Listing.findByPk(id);
}

module.exports = {
  listCategory,
  listListing,
  listOneListing,
};