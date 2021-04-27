// const { commerce } = require("faker");
const { Category, Listing } = require("./models");

async function listCategory() {
  return await Category.findAll();
}

module.exports = {
  listCategory,
};