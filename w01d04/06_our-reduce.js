// const nums = [2, 3, 5, 7];

// let total = 10;

// for (const num of nums) {
//   total += num;
// }

// console.log('total', total);

// const reducedTotal = nums.reduce((prevValue, currValue) => {
//   return prevValue + currValue;
// }, 0);

// console.log('reducedTotal', reducedTotal);

const nums = [2, 3, 5, 7];

const ourReduce = (arr, callback, initialValue) => {
  // initialize the accumulator to the initialValue
  let accumulator = initialValue;

  // loop through each element of the array
  for (const element of arr) {
    // call the callback on each element passing in the accumulator and the current element
    // store the return value in the accumulator variable
    accumulator = callback(accumulator, element);
  }

  // return the final accumulated value
  return accumulator;
};

const ourResult = ourReduce(nums, (acc, cur) => acc + cur, 10);
console.log(ourResult);

const ourResult2 = ourReduce(nums, (acc, cur) => {
  acc[cur] = [cur];
  return acc;
}, {});

const ourResult3 = ourReduce(nums, (acc, cur) => {
  acc.push(cur * 3);
  return acc;
}, []);

console.log(nums);
console.log(ourResult3);
