/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  // const length = arr.length;
  // return length;

  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // create a variable to hold our running sum
  // let runningTotal = 0;

  // // loop through the provided arr
  // arr.forEach((num) => {
  //   // take each element (number) and add it to the running sum
  //   runningTotal += num;
  //   // runningTotal = runningTotal + num;
  // });

  // // return the running sum
  // return runningTotal;

  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // arr.reduce((a, c) => a + c);
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (!arr.length) {
    return null;
  }


  // avg = sum / count
  const total = sum(arr);
  const length = count(arr);

  const avg = total / length;

  return round(avg);
};

// Don't change below:
module.exports = { count, sum, mean };
