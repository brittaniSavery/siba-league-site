const assert = require("chai").assert;
const { retrieve } = require("../parse");

it("should retrieve webpage", async function () {
  const result = await retrieve(
    "http://localhost:3000/files/generated/SIBAStandings.html"
  );
  assert.isNotNull(result, "SIBA Standings HTML body");
  assert.include(
    result,
    "Simulation Internet Basketball Association Standings",
    "Returns correct Standings text"
  );
});
