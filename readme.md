# Purify Int

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)

[![License: MIT](https://badgen.net/github/license/karnthis/purify-int)](https://opensource.org/licenses/MIT)
[![github: version](https://badgen.net/github/release/karnthis/purify-int)](https://github.com/karnthis/purify-int)
[![github: last-commit](https://badgen.net/github/last-commit/karnthis/purify-int)](https://github.com/karnthis/purify-int)
[![npm: version](https://badgen.net/npm/v/purify-int)](https://www.npmjs.com/package/purify-int)
[![npm: downloads](https://badgen.net/npm/dt/purify-int)](https://www.npmjs.com/package/purify-int)

## How To Use
- Run `npm i purify-int`
- Include `const Purify = require('purify-int')`

## Function Guide
### asInt()
- Purify input to valid Integer: 
```js
let cleansed = Purify.asInt('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asInt('words')
console.log(cleansed) // output: 0
```
### asIntIn()
- Purify input to valid Integer with input non-Integer as fallback: 
```js
let cleansed = Purify.asIntIn('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asIntIn('words')
console.log(cleansed) // output: 'words'
```
### asIntR()
- Purify input to valid Integer with randomized fallback: 
```js
let cleansed = Purify.asIntR('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asIntR('words')
console.log(cleansed) // output: random integer between 1 and current unix time in ms
```
### asIntF()
- Purify input to valid Integer with optional second Integer-like arg as fallback: 
```js
let cleansed = Purify.asIntF('42', 5)
console.log(cleansed) // output: 42
let cleansed = Purify.asIntF('words', 5)
console.log(cleansed) // output: 5
let cleansed = Purify.asIntF('words', '5')
console.log(cleansed) // output: 5
let cleansed = Purify.asIntF('words', 'more words')
console.log(cleansed) // output: 0
```
### asIntN()
- Purify input to valid Integer with `null` as fallback: 
```js
let cleansed = Purify.asIntN('42')
console.log(cleansed) // output: 42
let cleansed = Purify.asIntN('words')
console.log(cleansed) // output: null
```
### asArrayInt()
- Flags are optional. Valid flags are:
	- `R` : Use random number as fallback
	- `N` : Use `null` as fallback
	- `K` : Use input non-Integer as fallback
- Purify input to valid array of Integers: 
```js
let cleansed = Purify.asArrayInt(['42', 'words']) // flag is optional
console.log(cleansed) // output: [42, 0]
let cleansed = Purify.asArrayInt(['42', 'words'], 'R')
console.log(cleansed) // output: [42, random integer as above]
let cleansed = Purify.asArrayInt(['42', 'words'], 'N')
console.log(cleansed) // output: [42, null]
let cleansed = Purify.asArrayInt(['42', 'words'], 'K')
console.log(cleansed) // output: [42, 'words']
```