// const { commerce } = require("faker");
const { Category, Listing } = require("./models");

async function listCategory() {
  return await Category.findAll();
}

async function listListing() {
  return await Listing.findAll();
}

async function listOneListing(id) {
  return await Listing.findByPk(id);
}

module.exports = {
  listCategory,
  listListing,
  listOneListing,
};