const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  res.json({
    message: "Incorrect route, please try /calc/either or /calc/combined",
  });
});

router.post("/either", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 + number2 - number1 * number2;

  if (result) res.json({ result: result });
});

router.get("/combined", (req, res, next) => {
  const number1 = validateNumber(req.body.number1);
  const number2 = validateNumber(req.body.number2);

  const result = number1 * number2;

  if (result) res.json({ result: result });
});

validateNumber = (number) => {
  const x = parseFloat(number);
  if (x > 0 && x <= 1) {
    return x;
  }
};

module.exports = router;
