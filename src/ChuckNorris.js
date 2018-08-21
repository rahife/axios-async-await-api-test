const axios = require("axios");
  
async function getFact(
  url = 'https://api.chucknorris.io/jokes/random'
) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return `Fact: ${data.value}`;
  } catch (error) {
    console.log(error);
    return 'ERROR'
  }
};

async function printFact(
  url = 'https://api.chucknorris.io/jokes/random'
) {
  const fact = await getFact(url);
  console.log(`Here the fact: ${fact}`);
};

module.exports = getFact;