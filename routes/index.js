const express = require("express");
// const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async function (req, res, next) {
  // res.render("index", { title: "Express" });
  res.redirect("/catalog");
});



module.exports = router;
