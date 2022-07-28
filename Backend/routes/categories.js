const express = require("express");
const router = express.Router();
const categoriesStore = require("../store/categories");

// get all categories
router.get("/", (req, res) => {
  const categories = categoriesStore.getCategories();
  res.send(categories);
});

module.exports = router;
