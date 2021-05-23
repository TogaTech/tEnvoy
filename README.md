<p align="center">
  <a href="https://togatech.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://togatech.org/favicon.png" width="100" alt="TogaTech Logo">
  </a>
</p>

<h1 align="center">tEnvoy</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/v/tenvoy.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/l/tenvoy.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/tenvoy"><img src="https://img.shields.io/npm/dm/tenvoy.svg?sanitize=true" alt="Monthly Downloads"></a>
</p>

PGP, NaCl, and PBKDF2 in node.js and the browser (hashing, random, encryption, decryption, signatures, conversions), used by [TogaTech.org](https://togatech.org/)

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

## Minify
If you would like to minify the code yourself instead of using the provided `tenvoy.min.js` (and optional `tenvoy.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

To install UglifyJS 3 as a command line app through NPM, run `npm install uglify-js -g`.

After UglifyJS 3 has been installed, you can run the following commands in your terminal:
```bash
uglifyjs ./tenvoy.js -o ./tenvoy.min.js -c -m --source-map "filename='./tenvoy.min.js.map',url='tenvoy.min.js.map'"
uglifyjs ./node/tenvoy.js -o ./node/tenvoy.min.js -c -m --source-map "filename='./node/tenvoy.min.js.map',url='tenvoy.min.js.map'"
```

# Cryptography Notice
This distribution includes cryptographic software. The country in which you currently reside may have restrictions on the import, possession, use, and/or re-export to another country, of encryption software. BEFORE using any encryption software, please check your country's laws, regulations and policies concerning the import, possession, or use, and re-export of encryption software, to see if this is permitted. See http://www.wassenaar.org/ for more information.

The U.S. Government Department of Commerce, Bureau of Industry and Security (BIS), has classified this software as Export Commodity Control Number (ECCN) 5D002.C.1, which includes information security software using or performing cryptographic functions with asymmetric algorithms. The form and manner of this distribution makes it eligible for export under the License Exception ENC Technology Software Unrestricted (TSU) exception (see the BIS Export Administration Regulations, Section 740.13) for both object code and source code.
