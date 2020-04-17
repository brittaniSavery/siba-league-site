const fs = require("fs");
const chai = require("chai");
const assert = chai.assert;
const { retrieve } = require("../parse");

//Quick helper function to load html files for testing/parsing
require.extensions[(".html", ".htm")] = function (module, filename) {
  exports = fs.readFileSync(filename, "utf8");
};

//Generated HTML files from the simulation basketball program
var teamranking = require("../teamranking.htm");

it("should retrieve webpage", async function () {
  const result = await retrieve(
    "http://localhost:3000/files/generated/SIBAStandings.html"
  );
  assert.include(
    result,
    "Simulation Internet Basketball Association Standings"
  );
});

it("Should throw error for non-existent page", async function () {
  const result = await retrieve("http://localhost:3000/doesNotExist.html");
  assert.typeOf(result, "error");
});
