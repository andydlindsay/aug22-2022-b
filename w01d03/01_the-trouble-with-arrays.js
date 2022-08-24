const studentOneUsername = 'Alice';
const studentOneCohort = 'Aug 22 2022';
const studentOneIsGraduated = false;

const studentOne = ['Alice', 'Aug 22 2022', false];
const studentTwo = ['Bob', 'Apr 21 2022', true];

// objects are collections of key/value pairs; dictionary; hash; associative array

const myArr = [1, 2, 3];

myArr[1] // retrieves the value
myArr[1] = 4; // sets the value

const studentThree = {
  firstName: 'Carol', 
  cohort: 'Jul22 2022',
  isGraduated: false,
  newthing: null,
  morestuff: 'hello',
};

console.log(studentThree);

const username = studentThree['username'] // retreive the value
console.log(username);

studentThree['username'] = 'Carol'; // sets the value

console.log(studentThree);

