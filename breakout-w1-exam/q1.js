/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // set up a variable to hold our lowest seen so far
  // let lowestValue = Infinity;
  let lowestValue = arr[0];

  // loop through the provided arr
  arr.forEach((num) => {
    // is the current element less than our lowest?
    if (num < lowestValue) {
      // if yes, replace our lowest with the current element
      lowestValue = num;
    }
  });

  // return the lowest number seen
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);

  // create a variable to hold highest seen so far
  let highestValue = arr[0];

  // loop through the provided arr
  arr.forEach((num) => {
    // is the current element higher than our highest value
    if (num > highestValue) {
      // if yes, replace highest value with current element
      highestValue = num;
    }
  });

  // return highest value
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
