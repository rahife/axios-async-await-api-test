import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { expect } from "chai";

describe("Testing with axios-mock-adapter", function () {
  
  let mock = new MockAdapter(axios);
  before(function() {
    // runs before all tests in this block
    // This sets the mock adapter on the default instance
    
    // Mock any GET request to https://api.chucknorris.io/jokes/random
    // arguments for reply are (status, data, headers)
    mock.onGet('https://api.chucknorris.io/jokes/random').reply(200, {
      category:null,
      icon_url:"https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
      id:"UM5YXGC_Sxmed3Tzmr_Rgw",
      url:"https:\/\/api.chucknorris.io\/jokes\/UM5YXGC_Sxmed3Tzmr_Rgw",
      value:"Chuck Norris counted to infinity-twice"
    });
  });
  
  after(function() {
      // runs after all tests in this block
      mock.restore();
  });
  
  it("Checks if mocked fact contains Chuck Norris", function (done) {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(function(response) {
        expect(response.data.value).to.contain("Chuck Norris");
        done();
      });
  });
});