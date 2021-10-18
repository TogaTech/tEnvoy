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
- openpgp (optional, default: `openpgp`): Object (`openpgp`) - a valid instance of OpenPGP.js (https://github.com/openpgpjs/openpgpjs), `openpgp` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `openpgp` or a polyfill
- nacl (optional, default: `nacl`): Object (`nacl`) - a valid instance of TweetNaCl.js (https://github.com/dchest/tweetnacl-js), `nacl` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `nacl` or a polyfill
- sha256 (optional, default: `sha256`): Object (`sha256`) - a valid instance of fasth-sha256-js (https://github.com/dchest/fast-sha256-js), `sha256` is added by default in `tenvoy.js`, but this parameter can be used to provide a modified version of `sha256` or a polyfill

**Returns:** tEnvoy (`tEnvoy {...}`) - the instance of tEnvoy

### wordsList
Gets or sets the [BIP39 English wordlist](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) as an array of 2048 words, used to generate random words or back up/restore NaCl-based keys
```javascript
let dictionary = envoy.dictionary;  // (2048) ['abandon', 'ability', 'able', 'about', ...]
envoy.dictionary = ['abandon', 'ability', 'able', 'about', ...];
```
**Type:** Array (`(2048) ['abandon', 'ability', 'able', 'about', ...]`)

**Warning: It is not recommended to modify envoy.dictionary.**

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
let bytes = envoy.util.utf8encode("test") // Uint8Array(4) [116, 101, 115, 116]
```
**Parameters:**
- string (required): string (`"test"`) - the string to encode

**Returns:** Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the UTF-8 encoded bytes

### util.utf8decode
Decodes a UTF-8 bytes array into a string
```javascript
let string = envoy.util.utf8decode(new Uint8Array([116, 101, 115, 116])) // "test"
```
**Parameters:**
- bytes (required): Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the bytes to decode

**Returns:** string (`"test"`) - the UTF-8 decoded string

### util.stringToBytes
Encodes a string into a bytes array
```javascript
let bytes = envoy.util.stringToBytes("test") // Uint8Array(4) [116, 101, 115, 116]
```
**Parameters:**
- string (required): string (`"test"`) - the string to encode

**Returns:** Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the encoded bytes

**Warning: While this method is similar to [util.utf8encode](#util-utf8encode), it does not handle UTF-8 encoding for characters outside of the 8 byte range, causing unexpected outputs for UTF-8 characters.**

### util.bytesToString
Decodes a bytes array into a string
```javascript
let string = envoy.util.utf8decode(new Uint8Array([116, 101, 115, 116])) // "test"
```
**Parameters:**
- bytes (required): Uint8Array (`Uint8Array(4) [116, 101, 115, 116]`) - the bytes to decode

**Returns:** string (`"test"`) - the decoded string

**Warning: While this method is similar to [util.utf8decode](#util-utf8decode), it does not handle UTF-8 decoding for characters outside of the 8 byte range, causing unexpected outputs for UTF-8 characters.**

### util.stringToHex

### util.hexToString

### util.bytesToHex

### util.hexToBytes

### util.arrayDeepCopy

### util.compareConstant

### util.mixedToUint8Array

### util.uint8ArrayToMixed

### util.pack

### util.unpack

### util.objectEquals

### util.fixArmor

## Random

### random.bytes

### random.number

### random.string

### random.words

## Hashing

### hash

### hash.sha256

### hash.sha1

### hash.sha224

### hash.sha384

### hash.sha512

### hash.md5

### hash.ripemd160

## Key Factory

### keyFactory.pbkdf2

### keyFactory.genSeedFromCredentials

### keyFactory.genPGPKeys

### keyFactory.genPGPSymmetricKey

### keyFactory.genNaClKeys

### keyFactory.genNaClSymmetricKey

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
