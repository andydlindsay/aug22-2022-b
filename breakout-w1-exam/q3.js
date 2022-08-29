/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 * 
 * "lighthouse in the house" // countLetters
 * { l: 1, i: 2, g: 1 }
 * { 6: 2, 5: 1, 9: 1 }
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create the piles

  // create an object to hold our piles
  const piles = {};

  // loop through the provided arr
  arr.forEach((num) => {
    // have we seen this number before?
    if (piles[num]) {
      // if yes, add the number to the pile (+1)
      piles[num] += 1;
    } else {
      // if no, we need to create a pile (key/value pair)
      piles[num] = 1;
    }
  });

  // console.log(piles);

  // compare the piles
  // create variables to hold highest value seen and highest key
  let highestValue = 0;
  let highestKey = null;

  // loop through the piles object
  for (const key in piles) {
    const value = piles[key];

    // is the value (assoc with that key) higher than the highest seen so far?
    if (value > highestValue) {
      // if yes, update the highest value and highest key
      highestValue = value;
      highestKey = key;
    }
  }

  // return the highest key
  return Number(highestKey);
};

// mode([6,2,3,4,9,6,1,0,5])

// Don't change below:
module.exports = { mode };
