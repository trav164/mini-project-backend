const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");

const filePath = path.join(__dirname, "../logs/logs.txt");

const logResult = (number1, number2, calculation, result) => {
  checkFileExists();

  // Would create an interface for this
  let data = {
    number1: number1,
    number2: number2,
    calculation: calculation,
    result: result,
    date: getDate(),
  };

  const stringJson = JSON.stringify(data);

  fs.appendFile(filePath, stringJson, function (err) {
    if (err) throw err;
    console.log("saved", stringJson);
  });
};

const getDate = () => {
  return new Date().toISOString();
};

const checkFileExists = () => {
  // Check file and path exists, if not create it synchronously
  if (!fs.existsSync(filePath)) {
    const newPath = path.join(__dirname, "../logs");
    mkdirp.sync(newPath);

    fs.writeFile(filePath, "", (err) => {
      if (err) throw err;
      console.log("log created");
    });
  }
};

module.exports = { logResult };
