// # debug-ns-test.js
import debug from 'debug-ns';
import foo from 'debug-ns/?foo';
import bar from 'debug-ns/?some=param&bar';
import colon from 'debug-ns/?with:colon';

debug('Default');
foo('Hello');
bar('world');
colon('!!!');
