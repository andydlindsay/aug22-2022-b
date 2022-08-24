// primitives are passed by value to functions (a copy is made)

// const addTwo = function(val) {
//   val = val + 2;
//   console.log('inside func', val);
//   return val;
// };

// let myNum = 4;
// addTwo(myNum);

// console.log('myNum', myNum);


// objects are passed to functions by reference (it doesn't get a copy, it gets the OG)
const updateName = function(student) {
  // student = {};
  const myStudent = {};
  // const myStudent = {};
  student.username = 'Dean';
  console.log('student inside func', student);
  return student;
};

const myStudent = {
  username: 'Alice'
};

updateName(myStudent);

console.log(myStudent);


