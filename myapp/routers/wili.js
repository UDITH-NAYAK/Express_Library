const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
  res.send("welcome to wiki home page");
});
router.get("/about", function (req, res) {
  res.send("welcome to wiki about page");
});
module.exports = router;
