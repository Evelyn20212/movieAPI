const express = require("express");
const router = express.Router();
const axios = require("axios");

//Get single movie movie_id
router.get("/:movie_id", (req, res) => {
  //https://api.themoviedb.org/3/movie/{movie_id}
  //My API :508947 --->http://localhost:3000/api/single-movie/508947
  axios
    .get("/movie/" + req.params.movie_id)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
