// TODO: change require's for import's es6 style
const getChuckNorrisFact = require('../src/ChuckNorris').getFact;
const printChucNorrisFact = require('../src/ChuckNorris').printFact;
const expect = require('chai').expect;

describe('Testing Chuck Norris facts', function () {
  it('Receives a fact', function (done) {
    let chuckFact;
    (async () => {
      chuckFact = await getChuckNorrisFact();
      console.log(chuckFact);
      expect(chuckFact).to.contain('Chuck Norris');
      done();
    })();
  }).timeout(4000);

  it('Prints a fact', function (done) {
    let result;
    (async () => {
      result = await printChucNorrisFact();
      expect(result).to.be.true;
      done();
    })();
  }).timeout(4000);
});