const getChuckNorrisFact = require('../src/ChuckNorris');
const expect = require('chai').expect;


describe('Testing Chuck Norris facts', function() {
    it('Receive a fact', function(done) {
        let chuckFact;
        async function someName() {
            chuckFact = await getChuckNorrisFact();
            console.log(chuckFact);
            expect(chuckFact).to.contain('Chuck Norris');
            done();
        }
        someName();
    });
});