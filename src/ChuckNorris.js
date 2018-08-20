const https = require('https');

// FIXME: this approach doesn not work.
export class ChuckNorris {

  constructor() {
    this.chuckNorrisFact = null;
    this.cacheFact();
  }

  getFact(){
    return this.chuckNorrisFact;
  }
  cacheFact() {   
    https.get('https://api.chucknorris.io/jokes/random', (resp) => {
      let data = '';
  
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
  
      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data).value);
        this.chuckNorrisFact = JSON.parse(data).value;
      });
  
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }
}