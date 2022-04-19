const express = require("express");
const router = express.Router();
const axios = require("axios");

//GET home page
router.get("/most-revenue/:page", (req, res) => {
  // TMDB api: https://api.themoviedb.org/3/discover/movie
  axios
    .get("discover/movie", {
      params: { page: req.params.page, sort_by: "revenue.desc" },
    })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});
//api route for sort function
router.get("/most-popular/:page", (req, res) => {
  // TMDB api: https://api.themoviedb.org/3/discover/movie
  axios
    .get("discover/movie", {
      params: { page: req.params.page, sort_by: "popularity.desc" },
    })
    .then((response) => {
      console.log(response);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

// @path /api/all-movies/:page
router.get("/:page", (req, res) => {
  // TMDB api: https://api.themoviedb.org/3/discover/movie?page={page}
  axios
    .get("discover/movie", { params: { page: req.params.page } })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});
module.exports = router;
