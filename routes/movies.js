const express = require("express");
const router = express.Router();

//get all movies
router.get("/", (req, res) => {
  res.render("movies", {
    // https://api.themoviedb.org/3/
    title: "All movies",
  });
});
module.exports = router;
