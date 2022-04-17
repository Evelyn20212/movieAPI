const express = require("express");
const router = express.Router();

//get homepage
router.get("/", (req, res, next) => {
  res.send("hello");
});

module.exports = router;
