const express = require("express");
const router = express.Router();

//get homepage
router.get("/", (req, res, next) => {
  res.render("index", {
    title: Dashboard,
  });
});

module.exports = router;
