const express = require("express");
const router = express.Router();

const logger = require("../helpers/logger.js");

router.post("/", (req, res, next) => {
  res.status(404);
  res.json({
    message: "Incorrect route, please try /calc/either or /calc/combined",
  });
});

router.post("/either", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 + number2 - number1 * number2;

  if (!isNaN(result)) {
    res.json({ result: result });
    logger.logResult(number1, number2, "Either", result);
  } else {
    res.status(400);
    res.json({
      message: "Invalid input, numbers must be between 0-1",
    });
  }
});

router.post("/combined", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 * number2;

  if (!isNaN(result)) {
    res.json({ result: result });
    logger.logResult(number1, number2, "Combined", result);
  } else {
    res.status(400);
    res.json({
      message: "Invalid input, numbers must be between 0-1",
    });
  }
});

validateNumber = (number) => {
  const x = parseFloat(number);
  if (x >= 0 && x <= 1) {
    return x;
  }
};

module.exports = router;
