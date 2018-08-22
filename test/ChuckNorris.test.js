import { getFact, printFact } from "../src/ChuckNorris";
import { expect } from "chai";

const getChuckNorrisFact = getFact;
const printChucNorrisFact = printFact;
const expecting = expect;

describe("Testing Chuck Norris facts", function() {
  it("Receives a fact", function(done) {
    let chuckFact;
    (async () => {
      chuckFact = await getChuckNorrisFact();
      console.log(chuckFact);
      expecting(chuckFact).to.contain("Chuck Norris");
      done();
    })();
  }).timeout(4000);

  it("Prints a fact", function(done) {
    let result;
    (async () => {
      result = await printChucNorrisFact();
      expecting(result).to.be.true;
      done();
    })();
  }).timeout(4000);
});
