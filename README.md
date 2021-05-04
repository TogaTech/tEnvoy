# tEnvoy

PGP, NaCl, and PBKDF2 in node.js and the browser (hashing, random, encryption, decryption, signatures, conversions), used by [TogaTech.org](https://togatech.org/)

More details coming soon...

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

After UglifyJS 3 has been installed, you can run the following command in your terminal:
```bash
uglifyjs tenvoy.js -o tenvoy.min.js -c -m --source-map "filename='tenvoy.min.js.map',url='tenvoy.min.js.map'"
```
