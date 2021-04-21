const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Incorrect route, please try...",
  });
});

router.get("/either", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 + number2 - number1 * number2;

  if (result) res.json({ Result: result });
});

router.get("/combined", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 * number2;

  if (result) res.json({ Result: result });
});

validateNumber = (number) => {
  const x = parseFloat(number);
  if (x > 0 && x <= 1) {
    return x;
  }
};

module.exports = router;
