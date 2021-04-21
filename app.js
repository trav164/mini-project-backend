const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const calc = require("./api/calc_route");

app.use(
  "/calc",
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/calc", bodyParser.json());

app.use("/calc", calc);

app.use((req, res, next) => {
  const error = new Error("Route has not been setup yet dummy");
  error.status = 404;
  next(error);

  res.status(error.status || 500);
  res.json({
    error: {
      message: "Route has not been setup yet..",
    },
  });
});

module.exports = app;
