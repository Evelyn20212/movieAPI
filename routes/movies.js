const express = require("express");
const router = express.Router();
const db = require("../database");

//get all movies
router.get("/", (req, res) => {
  res.render("movies", {
    // https://api.themoviedb.org/3/
    title: "All movies",
  });
});

//get single movie
// http://localhost:3000/movies/634649
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.any(
    "SELECT id, comment, movie_id, TO_CHAR(created_at, 'HH12:MI AM, DD Mon YYYY') created_at FROM comments WHERE movie_id = $1 ORDER BY created_at DESC",
    [id]
  )
    .then((comments) => {
      res.render("singleMovie", {
        pageTitle: "Single Movie",
        // movie_id: id,
        movie_id: req.params.id,
        comments: comments,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

module.exports = router;
