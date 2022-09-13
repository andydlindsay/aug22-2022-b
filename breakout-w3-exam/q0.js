"use strict";

/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

const objectToArray = function(obj) {
  // return Object.entries(obj);

  // create an array to hold our return value
  const output = [];

  // loop through the object
  for (const key in obj) {
    const value = obj[key];

    // take the key and value and put them into an array
    const subArray = [key, value];

    // push that array into our return array
    output.push(subArray);
  }

  // return the created array
  return output;
};

// Don't change below:
module.exports = { objectToArray };
