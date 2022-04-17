const express = require("express");
const router = express.Router();

//get single movie
router.get("/", (req, res, next) => {
  res.render("singleMovie", {
    title: "Single movie",
  });
});

module.exports = router;
