const pets = require("../domain/pets");

var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  // respond with the list of pets
  res.send(pets);
});

module.exports = router;
