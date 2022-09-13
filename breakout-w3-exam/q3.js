"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value:
[key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // create a return object
  const output = {};

  // iterate through the provided array
  for (const subarray of arr) {
    // pull the key and value out of the subarray
    const key = subarray[0];
    const value = subarray[1];

    // ask if the value is an array
    if (Array.isArray(value)) {
      // if it is, we need to use recursion
      output[key] = deepArrayToObject(value);
      continue;
    }

    // add the key/value pair to the return object
    output[key] = value;
  }

  // return the created object
  return output;
};

// Don't change below:
module.exports = { deepArrayToObject };
