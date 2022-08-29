// describe('', () => {}); // grouping tests together (optional)
// it('', () => {}); // individual tests

const funcs = require('../say-hello');
// const assert = require('assert');

const assert = require('chai').assert;

// const chai = require('chai');
// const assert = chai.assert;

const sayHello = funcs.sayHello;

describe('tests for the sayHello function', () => {

  it('can say hello to a username', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';

    assert.strictEqual(actual, expected);
  });

  it('returns false if no username is passed in', () => {
    const actual = sayHello();
    const expected = false;

    assert.strictEqual(actual, expected);
  });

});