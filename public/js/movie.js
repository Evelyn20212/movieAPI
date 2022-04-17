const { $cn } = require("../../database");

let IMAGE_URL = "http://image.tmdb.org/t/p/w500";
let page = 1;

$(document).ready(function () {
  console.log("ready");
  $("select").formSelect();
  getMovies(page);
});
