require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// var bodyParser = require("body-parser");

// Middleware
const morgan = require("morgan");
app.use(morgan("dev"));

const path = require("path");

//axios
const axios = require("axios");
axios.default.baseURL = "https://api.themoviedb.org/3/";
axios.default.params = {
  api_key: process.env.TMDB_API_KEY,
  include_adult: false,
};
// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS - views by default
app.set("view engine", "ejs");

//static files
app.use(express.static(path.join(__dirname, "public")));

//Routes
const singleMovieRouter = require("./routes/singleMovie");
app.use("/singleMovie", singleMovieRouter);

const moviesRouter = require("./routes/movies");
app.use("/movies", moviesRouter);

//API routes
app.use("/API/movies", require("./routes/API/allMoviesAPI"));
app.use("/API/singleMovie", require("./routes/API/singleMovieAPI"));

app.listen(port, () => {
  console.log(`Example app listening on http ://localhost:${port}/`);
});
