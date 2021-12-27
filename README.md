<p align="center">
	<a href="https://togatech.org/" target="_blank" rel="noopener noreferrer">
		<img src="https://togatech.org/favicon.png" width="100" alt="TogaTech Logo">
	</a>
</p>

<h1 align="center">tEnvoy</h1>
<p align="center">
	<a href="https://github.com/TogaTech/tEnvoy/actions"><img src="https://img.shields.io/github/workflow/status/TogaTech/tEnvoy/Node.js%20CI" alt="Build Status"></a>
	<a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/v/tenvoy.svg?sanitize=true" alt="Version"></a>
	<a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/l/tenvoy.svg?sanitize=true" alt="License"></a>
	<a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/dm/tenvoy.svg?sanitize=true" alt="Monthly Downloads"></a>
	<a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/dt/tenvoy.svg?sanitize=true" alt="Total Downloads"></a>
</p>

PGP, NaCl, and PBKDF2 in node.js and the browser (hashing, random, encryption, decryption, signatures, conversions), used by [TogaTech.org](https://togatech.org/)

# Table of Contents
- [Imports](#imports)
	- [Browser Import](#browser-import)
	- [Node.js NPM Import](#nodejs-npm-import)
	- [Node.js File Import](#nodejs-file-import)
- [Minify](#minify)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [Quickstart](#quickstart)
- [Documentation](#documentation)
	- [General](#general)
	- [Core](#core)
	- [Utilities](#utilities)
	- [Random](#random)
	- [Hashing](#hashing)
	- [Key Factory](#key-factory)
	- [PGP Keys](#pgp-keys)
	- [NaCl Keys](#nacl-keys)
	- [NaCl Signing Keys](#nacl-signing-keys)
- [Cryptography Notice](#cryptography-notice)

# Imports

## Browser Import
For the browser, only `./tenvoy.js` or `./tenvoy.min.js` is required and has all dependencies bundled inside the single file. We recommend including `./tenvoy.min.js.map` in the same directory as `./tenvoy.min.js`, which allows a browser to reconstruct the original unminified file in the debugger.

```html
<script type="text/javascript" src="./tenvoy.min.js"></script>
<script>
	const envoy = new tEnvoy();
</script>
```

## Node.js NPM Import
tEnvoy is available through the NPM registry. To install tEnvoy, use the following command in the terminal:
```bash
npm install tenvoy
```
To install tEnvoy into an NPM project, use this command instead:
```bash
npm install tenvoy --save
```
Make sure to run the test cases to ensure that tEnvoy works properly:
```bash
npm test
```
To include tEnvoy in your code:
```javascript
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("tenvoy");
const envoy = new tEnvoy();
```

## Node.js File Import
For node.js file import, the filetree must be kept as-is without modifications. The entire repository must be cloned and placed within a directory, and `./node/tenvoy.js` or `./node/tenvoy.min.js` must be used to import the program.

First, ensure that all dependencies have been installed:
```bash
npm install
```
Make sure to run the test cases to ensure that tEnvoy works properly:
```bash
npm test
```
To include tEnvoy in your code:
```javascript
const { tEnvoy, tEnvoyPGPKey, tEnvoyNaClKey, tEnvoyNaClSigningKey } = require("./node/tenvoy.min.js");
const envoy = new tEnvoy();
```

# Minify
If you would like to minify the code yourself instead of using the provided `tenvoy.min.js` (and optional `tenvoy.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

To install UglifyJS 3 as a command line app through NPM, run `npm install uglify-js -g`.

After UglifyJS 3 has been installed, you can run the following commands in your terminal:
```bash
uglifyjs ./tenvoy.js -o ./tenvoy.min.js -c -m --source-map "filename='./tenvoy.min.js.map',url='tenvoy.min.js.map'"
uglifyjs ./node/tenvoy.js -o ./node/tenvoy.min.js -c -m --source-map "filename='./node/tenvoy.min.js.map',url='tenvoy.min.js.map'"
```

# Dependencies

# Contributing

# Quickstart

# Documentation

## General

### constructor
Creates a new instance of tEnvoy
```javascript
const envoy = new tEnvoy(openpgp, nacl, sha256); // tEnvoy {...}
```
For browsers only, a static `window` property contains an instance of tEnvoy by default. This instance is less secure than creating your own scoped instance (due to prototype pollution vulnerabilities) but can be helpful for debugging purposes in the browser console:
```javascript
const envoy = window.TogaTech.tEnvoy; // tEnvoy {...}
```
**Parameters:**
- openpgp (optional, default: `openpgp`): Object (`openpgp`) - a valid instance of [OpenPGP.js](https://github.com/openpgpjs/openpgpjs), `openpgp` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `openpgp` or a polyfill
- nacl (optional, default: `nacl`): Object (`nacl`) - a valid instance of [TweetNaCl.js](https://github.com/dchest/tweetnacl-js), `nacl` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `nacl` or a polyfill
- sha256 (optional, default: `sha256`): Object (`sha256`) - a valid instance of [fast-sha256-js](https://github.com/dchest/fast-sha256-js), `sha256` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `sha256` or a polyfill

**Returns:** tEnvoy (`tEnvoy {...}`) - the instance of tEnvoy

### wordsList
Gets or sets the [BIP39 English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) as an array of 2048 words, used to generate random words or back up/restore NaCl-based keys
```javascript
let wordsList = envoy.wordsList;  // (2048) ['abandon', 'ability', 'able', 'about', ...]
envoy.wordsList = ['abandon', 'ability', 'able', 'about', ...];
```
**Type:** Array (`(2048) ['abandon', 'ability', 'able', 'about', ...]`)

**Warning: It is not recommended to modify envoy.wordsList.**

### version
Gets the version (read-only) of tEnvoy
```javascript
let version = envoy.version; // "v7.0.8"
```
**Type:** string (`"v7.0.8"`)

## Core

### core.openpgp
Gets the instance of `openpgp` (read-only) for tEnvoy (can be set in the constructor)
```javascript
let openpgp = envoy.core.openpgp; // {...}
```
**Type:** Object (`{...}`)

### core.nacl
Gets the instance of `nacl` (read-only) for tEnvoy (can be set in the constructor)
```javascript
let nacl = envoy.core.nacl; // {...}
```
**Type:** Object (`{...}`)

### core.sha256
Gets the instance of `sha256` (read-only) for tEnvoy (can be set in the constructor)
```javascript
let sha256 = envoy.core.sha256; // {...}
```
**Type:** Object (`{...}`)

## Utilities

### util.utf8encode
Encodes a string into a UTF-8 bytes array
```javascript
let bytes = envoy.util.utf8encode("test"); // Uint8Array(4) [116, 101, 115, 116]
```
**Parameters:**
- string (required): string (`"test"`) - the string to encode

**Returns:** Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the UTF-8 encoded bytes

### util.utf8decode
Decodes a UTF-8 bytes array into a string
```javascript
let string = envoy.util.utf8decode(new Uint8Array([116, 101, 115, 116])); // "test"
```
**Parameters:**
- bytes (required): Uint8Array or Array (`Uint8Array(4) [116, 101, 115, 116]`) - the bytes to decode

**Returns:** string (`"test"`) - the UTF-8 decoded string

### util.stringToBytes
Encodes a string into a bytes array
```javascript
let bytes = envoy.util.stringToBytes("test"); // Uint8Array(4) [116, 101, 115, 116]
```
**Parameters:**
- string (required): string (`"test"`) - the string to encode

**Returns:** Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the encoded bytes

**Warning: While this method is similar to [util.utf8encode](#util-utf8encode), it does not handle UTF-8 encoding for characters outside of the 8 bit range, causing unexpected outputs for UTF-8 characters.**

### util.bytesToString
Decodes a bytes array into a string
```javascript
let string = envoy.util.utf8decode(new Uint8Array([116, 101, 115, 116])); // "test"
```
**Parameters:**
- bytes (required): Uint8Array or Array (`Uint8Array(4) [116, 101, 115, 116]`) - the bytes to decode

**Returns:** string (`"test"`) - the decoded string

**Warning: While this method is similar to [util.utf8decode](#util-utf8decode), it does not handle UTF-8 decoding for characters outside of the 8 bit range, causing unexpected outputs for UTF-8 characters.**

### util.stringToHex
Encodes a string into hexadecimal
```javascript
let hex = envoy.util.stringToHex("testing"); // "74657374696e67"
```
**Parameters:**
- string (required): string (`"testing"`) - the string to encode 

**Returns:** string (`"74657374696e67"`) - the encoded hexadecimal

### util.hexToString
Decodes hexadecimal into a string
```javascript
let hex = envoy.util.hexToString("74657374696e67"); // "testing"
```
**Parameters:**
- hex (required): string (`"74657374696e67"`) - the hexadecimal to decode

**Returns:** string (`"testing"`) - the decoded string

### util.bytesToHex
Encodes a bytes array into hexadecimal
```javascript
let hex = envoy.util.bytesToHex(new Uint8Array([116, 101, 115, 116, 105, 110, 103])); // "74657374696e67"
```
**Parameters:**
- bytes (required): Uint8Array or Array (`new Uint8Array([116, 101, 115, 116, 105, 110, 103])`) - the bytes to encode 

**Returns:** string (`"74657374696e67"`) - the encoded hexadecimal

### util.hexToBytes
Decodes hexadecimal into a bytes array
```javascript
let hex = envoy.util.hexToBytes("74657374696e67"); // Uint8Array(7) [116, 101, 115, 116, 105, 110, 103]
```
**Parameters:**
- hex (required): string (`"74657374696e67"`) - the hexadecimal to decode

**Returns:** Uint8Array (`Uint8Array(7) [116, 101, 115, 116, 105, 110, 103]`) - the decoded bytes

### util.arrayDeepCopy
Copies an array and all subarrays to a new array
```javascript
let copy = envoy.util.arrayDeepCopy([1, [2, 3], new Uint8Array([4, 5]), 6]); // [1, [2, 3], Uint8Array(2) [4, 5], 6]
```
**Parameters:**
- hex (required): string (`"74657374696e67"`) - the hexadecimal to decode

**Returns:** Uint8Array (`Uint8Array(7) [116, 101, 115, 116, 105, 110, 103]`) - the decoded bytes

### util.compareConstant
Compares two arguments for index-based equality in almost constant time
```javascript
let equals1 = envoy.util.compareConstant([1, 2], [1, 2]); // true
let equals2 = envoy.util.compareConstant([1, 2], [3, 2]); // false
let equals3 = envoy.util.compareConstant(new Uint8Array([1, 2]), [1, 2]); // true
let equals4 = envoy.util.compareConstant(new Uint16Array([1, 2]), new Uint8Array([1, 2])); // true
let equals5 = envoy.util.compareConstant("test", "test"); // true
let equals6 = envoy.util.compareConstant("test", ["t", "e", "s", "t"]); // true
let equals7 = envoy.util.compareConstant("test", "testing"); // false
```
**Parameters:**
- inputted (required): string or Array or Uint8Array or any index-based object (`[1, 2]`) - the user-inputted argument for comparison
- original (required): string or Array or Uint8Array or any index-based object (`[1, 2]`) - the stored argument to check the user-inputted argument against

**Returns:** boolean (`true`) - whether the index-based objects are equal (`==`) at every index and have the same length

### util.mixedToUint8Array
Converts any type to a Uint8Array
```javascript
let uint8array1 = envoy.util.mixedToUint8Array(null); // null
let uint8array2 = envoy.util.mixedToUint8Array(new Uint8Array([1, 2])); // Uint8Array(2) [1, 2]
let uint8array3 = envoy.util.mixedToUint8Array({0: 1, 1: 2}); // Uint8Array(2) [1, 2]
let uint8array4 = envoy.util.mixedToUint8Array([1, 2]); // Uint8Array(2) [1, 2]
let uint8array5 = envoy.util.mixedToUint8Array(1); // Uint8Array(1) [1]
let uint8array6 = envoy.util.mixedToUint8Array(256); // Uint8Array(2) [1, 0]
let uint8array7 = envoy.util.mixedToUint8Array(0); // Uint8Array(1) [0]
let uint8array8 = envoy.util.mixedToUint8Array(-1); // Uint8Array(1) [1]
let uint8array9 = envoy.util.mixedToUint8Array(-256); // Uint8Array(2) [1, 0]
let uint8array10 = envoy.util.mixedToUint8Array(NaN); // Uint8Array(1) [0]
let uint8array11 = envoy.util.mixedToUint8Array(1.1); // Uint8Array(3) [49, 46, 49]
let uint8array12 = envoy.util.mixedToUint8Array(Infinity); // Uint8Array(1) [255]
let uint8array13 = envoy.util.mixedToUint8Array([256, 257]); // Uint8Array(9) [91, 50, 53, 54, 44, 50, 53, 55, 93]
let uint8array14 = envoy.util.mixedToUint8Array(["t", "e", "s", "t"]); // Uint8Array(17) [91, 34, 116, 34, 44, 34, 101, 34, 44, 34, 115, 34, 44, 34, 116, 34, 93]
let uint8array15 = envoy.util.mixedToUint8Array({"t": "e", "s": "t"}); // Uint8Array(17) [123, 34, 116, 34, 58, 34, 101, 34, 44, 34, 115, 34, 58, 34, 116, 34, 125]
let uint8array16 = envoy.util.mixedToUint8Array(true); // Uint8Array(1) [1]
let uint8array17 = envoy.util.mixedToUint8Array(false); // Uint8Array(1) [0]
let uint8array18 = envoy.util.mixedToUint8Array(function test() {return "test"}); // Uint8Array(31) [102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 115, 116, 40, 41, 32, 123, 114, 101, 116, 117, 114, 110, 32, 34, 116, 101, 115, 116, 34, 125]
let uint8array19 = envoy.util.mixedToUint8Array("test"); // Uint8Array(4) [116, 101, 115, 116]
let uint8array20 = envoy.util.mixedToUint8Array("test", true); // Uint8Array(5) [254, 116, 101, 115, 116]
let uint8array21 = envoy.util.mixedToUint8Array("test", true, 10); // Uint8Array(10) [255, 255, 255, 255, 255, 254, 116, 101, 115, 116]
```
**Parameters:**
- mixed (required): any (`[1, 2]`) - the mixed object to convert to a Uint8Array
- includeType (optional, default: `false`): boolean (`false`) - whether to include the type of the original mixed object in the Uint8Array
- length (optional, default: length of return array): number (`2`) - the length of the return array, used to add padding (includeType must be true to use the length argument)

**Mixed Types:**
- null (`null`) => null (`null`)
- undefined (`undefined`) => undefined (`undefined`)
- Uint8Array (`new Uint8Array([1, 2])`) => Uint8Array (`Uint8Array(2) [1, 2]`)
- Uint8Array-like object (`{0: 1, 1: 2}`) => mapped keys to indices (`Uint8Array(2) [1, 2]`)
- Uint8Array-like Array (`[1, 2]`) => mapped one-to-one Uint8Array (`Uint8Array(2) [1, 2]`)
- Integer number (`256`) => base-256 representation of absolute value of number (`Uint8Array(2) [1, 0]`)
- NaN (`NaN`) => 0 `Uint8Array(1) [0]`
- Decimal number (`1.1`) => UTF-8 encoded string representation of number (`Uint8Array(3) [49, 46, 49]`)
- Infinity (`Infinity`) => 255 (`Uint8Array(1) [255]`)
- Array (`[256, 257]`) => UTF-8 encoded JSON stringified Array (`Uint8Array(9) [91, 50, 53, 54, 44, 50, 53, 55, 93]`)
- JSON object or object with toJSON method (`{"t": "e", "s": "t"}`) => UTF-8 encoded JSON stringified Object (`Uint8Array(17) [123, 34, 116, 34, 58, 34, 101, 34, 44, 34, 115, 34, 58, 34, 116, 34, 125]`)
- true (`true`) => 1 (`Uint8Array(1) [1]`)
- false (`false`) => 0 (`Uint8Array(1) [0]`)
- function (`function test() {return "test"}`) => UTF-8 encoded string representation of function (`Uint8Array(31) [102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 115, 116, 40, 41, 32, 123, 114, 101, 116, 117, 114, 110, 32, 34, 116, 101, 115, 116, 34, 125]`)
- string or other (`"test"`) => UTF-8 encoded string or return value of `toString()` (`Uint8Array(4) [116, 101, 115, 116]`)

**Included Types:**
- Uint8Array: first non-padding byte is `0`
- Uint8Array-like object: first non-padding byte is `0` (a Uint8Array-like object is considered to be an artifact of an encoding or decoding bug and is treated like a Uint8Array, please add a dummy non-numerical key to bypass this behavior)
- Uint8Array-like Array: first non-padding byte is  `1`
- Integer positive number: first non-padding byte is `2`
- Integer negative number: first non-padding byte is `3`
- 0: first non-padding byte is `4`
- NaN: first non-padding byte is `7`
- Decimal number: first non-padding byte is `8`
- Infinity: first non-padding byte is `9`
- Array: first non-padding byte is `5`
- JSON object or object with toJSON method: first non-padding byte is `5`
- true: first non-padding byte is `6`
- false: first non-padding byte is `6`
- function: first non-padding byte is `10`
- string or other: first non-padding byte is `254`
- padding: padding bytes of `255` are added to the beginning of the returned Uint8Array until the specified length is reached, and the returned array will be truncated if the length of the returned array is larger than the specified length.

**Returns:** Uint8Array (`Uint8Array(2) [1, 2]`) - the converted result as a Uint8Array

### util.uint8ArrayToMixed
Converts a Uint8Array back to an Array or any type (reverse of `util.mixedToUint8Array`)
```javascript
let mixed1 = envoy.util.uint8ArrayToMixed(new Uint8Array([1, 2])); // [1, 2]
let mixed2 = envoy.util.uint8ArrayToMixed(new Uint8Array([255, 255, 255, 255, 255, 254, 116, 101, 115, 116]), true); // "test"
```
**Parameters:**
- uint8Array (required): Uint8Array or Uint8Array-like array or Uint8Array-like object (`new Uint8Array([1, 2])`) - the Uint8Array to convert to a mixed object
- includeType (optional, default: `false`): boolean (`false`) - whether to use the type of the original mixed object in the converted mixed object

**Returns:** any (`[1, 2]`) - the converted result as an Array or any type

### util.pack
Alias of `util.mixedToUint8Array(mixed, true, length)`

**Parameters:**
- mixed (required): any (`[1, 2]`) - the mixed object to convert to a Uint8Array
- length (optional, default: length of return array): number (`2`) - the length of the return array, used to add padding (includeType must be true to use the length argument)

**Returns:** Uint8Array (`Uint8Array(2) [1, 2]`) - the converted result as a Uint8Array

### util.unpack
Alias of `util.uint8ArrayToMixed(mixed, true)`

**Parameters:**
- uint8Array (required): Uint8Array or Uint8Array-like array or Uint8Array-like object (`[1, 2]`) - the Uint8Array to convert to a mixed object

**Returns:** any (`[1, 2]`) - the converted result as an Array or any type

### util.objectEquals
Check whether two JSON objects are equal in almost constant time
```javascript
let equals1 = envoy.util.objectEquals({"t": "e", "s": "t"}, {"t": "e", "s": "t"}); // true
let equals2 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"i": {"n": "g"}, "s": "t", "t": "e"}); // true
let equals3 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"i": {"n": "g"}, "t": "e"}); // false
let equals4 = envoy.util.objectEquals({"i": {"n": "g"}, "t": "e"}, {"t": "e", "s": "t", "i": {"n": "g"}}); // false
let equals5 = envoy.util.objectEquals({"t": "e", "s": "t", "i": {"n": "g"}}, {"t": "e", "s": "t", "i": {"n": "o"}}); // false
```
**Parameters:**
- inputted (optional, default: `null`): object (`{"t": "e", "s": "t", "i": {"n": "g"}}`) - the user-inputted argument for comparison
- original (optional, default: `null`): object (`{"i": {"n": "g"}, "s": "t", "t": "e"}`) - the stored argument to check the user-inputted argument against

**Returns:** boolean (`true`) - whether the objects are equal (`==`) at every key and have the same keys

### util.fixArmor
Internal method used to fix the armored text on a `tEnvoyPGPKey`

## Random

### random.bytes
Generates cryptographically secure random bytes using any available cryptographically secure random number generator
```javascript
(async() => {
	let random = await envoy.random.bytes(16); // Uint8Array(16) [104, 37, 240, 56, 174, 137, 249, 10, 46, 185, 52, 135, 172, 39, 150, 21]
})();
```
**Parameters:**
- length (optional, default: `1`): number (`16`) - the number of bytes to generate

**Returns:** Promise fulfilling to Uint8Array (`Uint8Array(16) [104, 37, 240, 56, 174, 137, 249, 10, 46, 185, 52, 135, 172, 39, 150, 21]`) - the cryptographically secure random bytes

**Note:** If tEnvoy cannot find any available cryptographically secure random number generator on the platform, you can replace this function **at your own risk** by assigning `envoy.random.bytes` to your own custom function. **`random.bytes` is used for all random bytes generation throughout tEnvoy. Do not replace this function unless you are a cryptography expert. If your custom function replacement is insecure, the entire security of tEnvoy will be compromised. We are not in any way responsible or liable for your modifications to tEnvoy.**

### random.number
Generates a cryptographically secure random number using `random.bytes`
```javascript
(async() => {
	let number = await envoy.random.number(0, 10); // 8.862745098039216
})();
```
**Parameters:**
- min (optional, default: `0`): number (`0`) - the minimum bound for the number
- max (optional, default: `1`): number (`10`) - the maximum bound for the number

**Returns:** Promise fulfilling to Decimal number (`8.862745098039216`) - a cryptographically secure random number between the specified minimum and maximum

### random.string
Generates a cryptographically secure random string using `random.number`
```javascript
(async() => {
	let string = await envoy.random.string(16); // HLONsJaTcCvI3vRD
})();
```
**Parameters:**
- length (optional, default: `10`): number (`16`) - the number of characters to generate

**Returns:** Promise fulfilling to string (`HLONsJaTcCvI3vRD`) - a cryptographically secure random string of the specified length

### random.words
Generates a cryptographically secure series of random words using `random.number` and the [BIP39 English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)
```javascript
(async() => {
	let words = await envoy.random.words(4); // bright shield latin web
})();
```
**Parameters:**
- length (optional, default: `12`): number (`4`) - the number of words to generate

**Returns:** Promise fulfilling to string (`bright shield latin web`) - a cryptographically secure series of the specified number of random words

## Hashing

### hash
Get the deterministic hash using any hash function in tEnvoy (SHA-256, SHA-1, SHA-224, SHA-384, SHA-512, MD5, RIPEMD-160)
```javascript
(async() => {
	let hash = await envoy.hash("test", "sha256"); // 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)
- algorithm (optional, default: `"sha256"`): string - the algorithm to use

**Algorithms:**
- SHA-256 => `"sha256"`
- SHA-1 => `"sha1"`
- SHA-224 => `"sha224"`
- SHA-384 => `"sha384"`
- SHA-512 => `"sha512"`
- MD5 => `"md5"`
- RIPEMD-160 => `"ripemd160"`

**Returns:** Promise fulfilling to string (`"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"`) - the hexadecimal representation of the deterministic hash of the specified input using the specified algorithm

### hash.sha256
Get the deterministic hash using the SHA-256 hash function
```javascript
(async() => {
	let hash = await envoy.hash.sha256("test"); // 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"`) - the hexadecimal representation of the deterministic hash of the specified input using the SHA-256 algorithm

### hash.sha1
Get the deterministic hash using the SHA-1 hash function
```javascript
(async() => {
	let hash = await envoy.hash.sha1("test"); // a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"`) - the hexadecimal representation of the deterministic hash of the specified input using the SHA-1 algorithm

**Warning: It is not recommended to use this method, as the SHA-1 algorithm has been broken.**

### hash.sha224
Get the deterministic hash using the SHA-224 hash function
```javascript
(async() => {
	let hash = await envoy.hash.sha224("test"); // 90a3ed9e32b2aaf4c61c410eb925426119e1a9dc53d4286ade99a809
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"90a3ed9e32b2aaf4c61c410eb925426119e1a9dc53d4286ade99a809"`) - the hexadecimal representation of the deterministic hash of the specified input using the SHA-224 algorithm

### hash.sha384
Get the deterministic hash using the SHA-384 hash function
```javascript
(async() => {
	let hash = await envoy.hash.sha384("test"); // 768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"768412320f7b0aa5812fce428dc4706b3cae50e02a64caa16a782249bfe8efc4b7ef1ccb126255d196047dfedf17a0a9"`) - the hexadecimal representation of the deterministic hash of the specified input using the SHA-384 algorithm

### hash.sha512
Get the deterministic hash using the SHA-512 hash function
```javascript
(async() => {
	let hash = await envoy.hash.sha512("test"); // ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff"`) - the hexadecimal representation of the deterministic hash of the specified input using the SHA-512 algorithm

### hash.md5
Get the deterministic hash using the MD5 hash function
```javascript
(async() => {
	let hash = await envoy.hash.md5("test"); // 098f6bcd4621d373cade4e832627b4f6
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"098f6bcd4621d373cade4e832627b4f6"`) - the hexadecimal representation of the deterministic hash of the specified input using the MD5 algorithm

**Warning: It is not recommended to use this method, as the MD5 algorithm has been broken.**

### hash.ripemd160
Get the deterministic hash using the RIPEMD-160 hash function
```javascript
(async() => {
	let hash = await envoy.hash.ripemd160("test"); // 5e52fee47e6b070565f74372468cdc699de89107
})();
```
**Parameters:**
- mixed (required): string or any - the value to hash (encoded into bytes for hashing through `util.mixedToUint8Array(mixed, false)`)

**Returns:** Promise fulfilling to string (`"5e52fee47e6b070565f74372468cdc699de89107"`) - the hexadecimal representation of the deterministic hash of the specified input using the RIPEMD-160 algorithm

## Key Factory

### keyFactory.pbkdf2
Generates a key of a certain size from a password and salt through a certain number of rounds through PBKDF2-HMAC-SHA256 (Password-Based Key Derivation Function 2 with SHA-256 Hash-based Message Authentication Code)
```javascript
(async() => {
	let bytes = await envoy.keyFactory.pbkdf2("password", "salt", 150000, 32); // Uint8Array(32) [149, 196, 67, 208, 74, 43, 94, 32, 74, 46, 127, 61, 91, 212, 249, 168, 6, 120, 30, 15, 29, 198, 125, 130, 53, 250, 186, 249, 187, 224, 180, 201]
})();
```
**Parameters:**
- password (required): string or any - the password to use to generate the key (encoded into bytes for key generation through `util.mixedToUint8Array(password, false)`)
- salt (required): string or any - the salt to use to generate the key (encoded into bytes for key generation through `util.mixedToUint8Array(salt, false)`)
- rounds (optional, default: `150000`): number - the number of rounds to use to generate the key
- size (optional, default: `32`): number - the size of the key in bytes

**Returns:** the key generated from the specified parameters using PBKDF2-HMAC-SHA256

### keyFactory.genSeedFromCredentials
Alias of `keyFactory.pbkdf2(password, username, rounds, size)`

**Parameters:**
- username (required): string or any - the salt to use to generate the key (encoded into bytes for key generation through `util.mixedToUint8Array(username, false)`)
- password (required): string or any - the password to use to generate the key (encoded into bytes for key generation through `util.mixedToUint8Array(password, false)`)
- rounds (optional, default: `150000`): number - the number of rounds to use to generate the key
- size (optional, default: `32`): number - the size of the key in bytes

**Returns:** the key generated from the specified parameters using PBKDF2-HMAC-SHA256

### keyFactory.genPGPKeys
Generates an asymmetrical PGP key
```javascript
(async() => {
	let keys = await envoy.keyFactory.genPGPKeys(); // {privateKey: tEnvoyPGPKey, publicKey: tEnvoyPGPKey}
})();
```

### keyFactory.genPGPSymmetricKey
Generates a symmetrical PGP key
```javascript
(async() => {
	let key = await envoy.keyFactory.genPGPSymmetricKey({key: "test"}) // tEnvoyPGPKey {...}
})();
```

### keyFactory.genNaClKeys
Generates an asymmetrical NaCl key
```javascript
(async() => {
	let keys = await envoy.keyFactory.genNaClKeys(); // {privateKey: tEnvoyNaClKey, publicKey: tEnvoyNaClKey, privateSigningKey: tEnvoyNaClSigningKey, publicSigningKey: tEnvoyNaClSigningKey}
})();
```

### keyFactory.genNaClSymmetricKey
Generates a symmetrical NaCl key
```javascript
(async() => {
	let key = await envoy.keyFactory.genNaClSymmetricKey({key: "test"}); // tEnvoyNaClKey {...}
})();
```

## PGP Keys

### constructor

### tEnvoyPGPKey.destroy

### tEnvoyPGPKey.toString

### tEnvoyPGPKey.getType

### tEnvoyPGPKey.getPasswordProtected

### tEnvoyPGPKey.setPasswordProtected

### tEnvoyPGPKey.getId

### tEnvoyPGPKey.getKey

### tEnvoyPGPKey.getPrivate

### tEnvoyPGPKey.setPrivate

### tEnvoyPGPKey.getPrivateArmored

### tEnvoyPGPKey.setPrivateArmored

### tEnvoyPGPKey.getPublic

### tEnvoyPGPKey.setPublic

### tEnvoyPGPKey.getPublicArmored

### tEnvoyPGPKey.setPublicArmored

### tEnvoyPGPKey.encrypt

### tEnvoyPGPKey.decrypt

### tEnvoyPGPKey.sign

### tEnvoyPGPKey.verify

### tEnvoyPGPKey.toPublic

## NaCl Keys

### constructor

### tEnvoyNaClKey.destroy

### tEnvoyNaClKey.toString

### tEnvoyNaClKey.getType

### tEnvoyNaClKey.getPasswordProtected

### tEnvoyNaClKey.setPasswordProtected

### tEnvoyNaClKey.getPrivate

### tEnvoyNaClKey.setPrivate

### tEnvoyNaClKey.getPublic

### tEnvoyNaClKey.setPublic

### tEnvoyNaClKey.backup

### tEnvoyNaClKey.fromBackup

### tEnvoyNaClKey.encrypt

### tEnvoyNaClKey.decrypt

### tEnvoyNaClKey.encryptEphemeral

### tEnvoyNaClKey.decryptEphemeral

### tEnvoyNaClKey.genSigningKeys

### tEnvoyNaClKey.genSharedKey

### tEnvoyNaClKey.toPublic

## NaCl Signing Keys

### constructor

### tEnvoyNaClSigningKey.destroy

### tEnvoyNaClSigningKey.toString

### tEnvoyNaClSigningKey.getType

### tEnvoyNaClSigningKey.getPasswordProtected

### tEnvoyNaClSigningKey.setPasswordProtected

### tEnvoyNaClSigningKey.getPrivate

### tEnvoyNaClSigningKey.setPrivate

### tEnvoyNaClSigningKey.getPublic

### tEnvoyNaClSigningKey.setPublic

### tEnvoyNaClSigningKey.backup

### tEnvoyNaClSigningKey.fromBackup

### tEnvoyNaClSigningKey.sign

### tEnvoyNaClSigningKey.verify

### tEnvoyNaClSigningKey.verifyWithMessage

### tEnvoyNaClSigningKey.toPublic

# Cryptography Notice
This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to another country, of encryption software. BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use, and re-export of encryption software, to see if this is permitted. See http://www.wassenaar.org/ for more information.

The U.S. Government Department of Commerce, Bureau of Industry and Security (BIS), has classified this software as Export Commodity Control Number (ECCN) 5D002.C.1, which includes information security software using or performing cryptographic functions with asymmetric algorithms. The form and manner of this distribution makes it eligible for export under the License Exception ENC Technology Software Unrestricted (TSU) exception (see the BIS Export Administration Regulations, Section 740.13) for both object code and source code.
