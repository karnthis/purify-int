# Purify Int

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

[![License: MIT](https://badgen.net/github/license/karnthis/purify-int)](https://opensource.org/licenses/MIT)
[![github: version](https://badgen.net/github/release/karnthis/purify-int)](https://github.com/karnthis/purify-int)
[![github: last-commit](https://badgen.net/github/last-commit/karnthis/purify-int)](https://github.com/karnthis/purify-int)
[![npm: version](https://badgen.net/npm/v/purify-int)](placeholder)
[![npm: downloads](https://badgen.net/npm/dt/purify-int)](placeholder)

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