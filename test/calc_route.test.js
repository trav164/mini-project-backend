const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // or app?

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe("Calculation API", () => {
  // Base route
  describe("GET /", () => {
    it("Should return 404 - Incorrect route", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, response) => {
          response.should.have.status(404);
          response.body.should.have.property("message");
          response.body.message.should.equal("Route has not been setup yet..");
          response.body.should.have.property("validRoutes");
        });
      done();
    });
  });

  // POST calc route
  describe("POST /calc", () => {
    it("Should return 404 - Incorrect route", (done) => {
      chai
        .request(app)
        .post("/calc")
        .end((err, response) => {
          response.should.have.status(404);
          response.body.should.have.property("message");
          response.body.message.should.equal(
            "Incorrect route, please try /calc/either or /calc/combined"
          );
        });
      done();
    });
  });

  // POST /calc/combined
  describe("POST /calc/combined", () => {
    it("Valid - should return 0.25", (done) => {
      const body = {
        number1: 0.5,
        number2: 0.5,
      };
      chai
        .request(app)
        .post("/calc/combined")
        .send(body)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.result.should.equal(0.25);
        });
      done();
    });

    it("Invalid input - should return error message", (done) => {
      const body = {
        number1: 0.5,
        number2: 2,
      };
      chai
        .request(app)
        .post("/calc/combined")
        .send(body)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.message.should.equal(
            "Invalid input, numbers must be between 0-1"
          );
        });
      done();
    });
  });

  // POST /calc/either
  describe("POST /calc/either", () => {
    it("Valid - should return 0.75", (done) => {
      const body = {
        number1: 0.5,
        number2: 0.5,
      };
      chai
        .request(app)
        .post("/calc/either")
        .send(body)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.result.should.equal(0.75);
        });
      done();
    });

    it("Invalid input - should return error message", (done) => {
      const body = {
        number1: 0.5,
        number2: 2,
      };
      chai
        .request(app)
        .post("/calc/either")
        .send(body)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.message.should.equal(
            "Invalid input, numbers must be between 0-1"
          );
        });
      done();
    });
  });
});
