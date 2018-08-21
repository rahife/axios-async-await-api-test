const axios = require("axios");

async function getFact(
  url = 'https://api.chucknorris.io/jokes/random'
) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return `FACT: ${data.value}`;
  } catch (error) {
    console.log(error);
    return 'ERROR'
  }
};

async function printFact(
  url = 'https://api.chucknorris.io/jokes/random'
) {
  try {
    const fact = await getFact(url);
    console.log(`PRINT ${fact}`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  getFact: getFact,
  printFact: printFact
};