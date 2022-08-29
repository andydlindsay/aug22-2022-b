const assert = require('assert');
const funcs = require('./say-hello');

const sayHello = funcs.sayHello;
// console.log(arguments);

const actual = sayHello('Alice');
const expected = 'hello there Alice';

assert.strictEqual(actual, expected);
