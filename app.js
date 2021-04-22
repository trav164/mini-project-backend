const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const calc = require("./api/calc_route");

app.use("*", cors()); // * includes before other routes

// setup "calc" route to use bodyParser and point to /api/calc_route
app.use("/calc", bodyParser.urlencoded({ extended: true }));
app.use("/calc", bodyParser.json());
app.use("/calc", calc);

app.use("/", (req, res, next) => {
  // Fall back route if nothing is hit...
  res.status(404);
  res.json({
    message: "Route has not been setup yet..",
    validRoutes: ["localhost:8080/calc/either", "localhost:8080/calc/combined"],
  });
});

module.exports = app;
