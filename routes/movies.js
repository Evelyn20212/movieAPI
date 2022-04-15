const express = require("express");
const router = express.Router();

//get all movies
router.get("/", (req, res, next) => {
  res.render("movies", {
    title: "All movies",
  });
});
