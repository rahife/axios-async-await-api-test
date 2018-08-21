const axios = require("axios");
const url =
  "https://api.chucknorris.io/jokes/random";

async function getFact(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return `Fact: ${data.value}`;
  } catch (error) {
    console.log(error);
    return 'ERROR'
  }
};

async function printFact() {
  const fact = await getFact(url);
  console.log(`Here the fact: ${fact}`);
}

printFact();
