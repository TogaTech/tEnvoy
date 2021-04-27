# tEnvoy

More details coming soon...

## Minify
If you would like to minify the code yourself instead of using the provided `tenvoy.min.js` (and optional `tenvoy.min.js.map`), you can use [UglifyJS 3](https://github.com/mishoo/UglifyJS) to minifiy the code yourself.

To install UglifyJS 3 as a command line app through NPM, run `npm install uglify-js -g`.

After UglifyJS 3 has been installed, you can run the following command in your terminal:
```bash
uglifyjs tenvoy.js -o tenvoy.min.js -c -m --source-map "filename='tenvoy.min.js.map',url='tenvoy.min.js.map'"
```
