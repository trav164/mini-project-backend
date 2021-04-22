const express = require("express");
const router = express.Router();

const logger = require("../helpers/logger.js");

router.post("/", (req, res, next) => {
  res.json({
    message: "Incorrect route, please try /calc/either or /calc/combined",
  });
});

router.post("/either", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 + number2 - number1 * number2;

  // if(result) wouldn't return 0
  if (result !== null) {
    res.json({ result: result });
    logger.logResult(number1, number2, "Either", result);
  }
});

router.post("/combined", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 * number2;

  if (result !== null) {
    res.json({ result: result });
    logger.logResult(number1, number2, "Combined", result);
  }
});

validateNumber = (number) => {
  const x = parseFloat(number);
  if (x >= 0 && x <= 1) {
    return x;
  }
};

module.exports = router;
