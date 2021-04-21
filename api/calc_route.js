const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Incorrect route, please try...",
  });
});

router.get("/either", (req, res, next) => {
  console.log(req.body.number1);
  res.json(req.body);
});

router.get("/combined", (req, res, next) => {
  console.log(req.body);
  res.json(req.body);
});

// add function to validate that numbers are correct....

module.exports = router;
