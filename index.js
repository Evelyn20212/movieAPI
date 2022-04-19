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
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
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
// const searchRouter = require("./routes/search");
// app.use("/search", searchRouter);

//API routes
app.use("/api/movies", require("./routes/API/allMoviesAPI"));
app.use("/api/single-movie", require("./routes/API/singleMovieAPI"));
// app.use("/api/search", require("./routes/API/searchAPI"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}/`);
});
