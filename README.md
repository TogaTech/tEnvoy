# Notice
This repository is currently being used as a staging repo for `v6.0.0-alpha`, for the stable release, please download [v5.1.1](https://github.com/TogaTech/tEnvoy/releases/tag/v5.1.1).

## Known Issues
There are some known issues that will not be resolved until `v6.0.0` is released:
- For converting between mixed to Uint8Array, arrays with values over 255 will not work as intended.
- There does not yet exist a method to generate a public version of a `tEnvoyPGPKey`, `tEnvoyNaClKey`, or `tEnvoyNaClSigningKey` from the private version.
- Browser compatibility is spotty since we use `#` for private instance fields

# tEnvoy

More details coming soon...

## Minify
If you would like to minify the code yourself instead of using the provided `tenvoy.min.js` (and optional `tenvoy.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

To install UglifyJS 3 as a command line app through NPM, run `npm install uglify-js -g`.

After UglifyJS 3 has been installed, you can run the following command in your terminal:
```bash
uglifyjs tenvoy.js -o tenvoy.min.js -c -m --source-map "filename='tenvoy.min.js.map',url='tenvoy.min.js.map'"
```
