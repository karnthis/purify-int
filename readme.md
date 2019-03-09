# Purify Int

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## How To Use
- Run `npm i purify-int`
- Purify input to valid Integer: 
```js
const Purify = require('purify-int')
let cleansed = Purify.asInt('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asInt('words')
console.log(cleansed) // output: 0
```
- Purify input to valid Integer with fallback: 
```js
const Purify = require('purify-int')
let cleansed = Purify.asIntR('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asIntR('words')
console.log(cleansed) // output: random integer between 1 and current unix time in ms
```
- Purify input to valid array of Integers: 
```js
const Purify = require('purify-int')
let cleansed = Purify.asArrayInt(['42', 'words']) // flag is optional
console.log(cleansed) // output: [42, 0]
let cleansed = Purify.asArrayInt(['42', 'words'], 'R')
console.log(cleansed) // output: [42, random integer as above]
```