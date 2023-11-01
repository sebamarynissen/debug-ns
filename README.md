# debug-ns

This module is a small wrapper around the pattern
```js
import createDebug from 'debug';
const debug = createDebug('namespace');
```

With this module, you can do
```js
import debug from 'debug-ns/?namespace';
```
instead.

## A note on transpiling

This package is [esm only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
It doesn't make sense in a CommonJS environment because `require` expects file paths.
It can't handle url specifiers.

If you're using CommonJS you also don't need this package because you can just do
```js
const debug = require('debug')('namespace');
```

This also means that it **MUST NOT** be used in code that might get transpiled to CommonJS.
If your bundler supports outputting esm code, then it might work, but don't kill me if it doesn't.

If you're using TypeScript, make sure that TypeScript outputs esm code!
