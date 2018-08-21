# AXIOS API CALL AND TEST WITH ASYNC/ AWAIT

This is an api call exercise with unit test using axios, mocha, chai and async/ await.

I use this funny free API:

- api.chucknorris.io

### Environment

Tested in Ubuntu 18 with:

- node: 8.11.3
- npm: 6.3.0

### How to run it

```
$ npm install
$ npm test &&  npm start
```

### Example

```
$ npm test && npm start

> axios-async-await-api-test@1.0.0 test ~/workspace/project-dir
> mocha ./test/*test.js



  Testing Chuck Norris facts
FACT: If Chuck Norris ever allowed a sports team to be named after him, that team would never lose again...except when Chuck Norris played against it.
    ✓ Receives a fact (1467ms)
PRINT FACT: Michelle Obama twerks only for Chuck Norris.
    ✓ Prints a fact (1727ms)


  2 passing (3s)


> axios-async-await-api-test@1.0.0 start ~/workspace/project-dir
> node ./src/main.js

PRINT FACT: Chuck Norris knows what you did last winter.
```
