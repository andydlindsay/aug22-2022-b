

// const username = 'elise';
// sayHello(username);
// sayHello('francis');



const addTwo = function(num) {
  console.log(num + 2);
};

// sayHello
// sayHello()

const sayHello = function(name) {
  console.log(`hello ${name}`);
};

const runMyFunc = (func) => {
  console.log(func.toString());
  func('dean'); // sayHello('dean');
};

runMyFunc(sayHello);

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});

runMyFunc(name => console.log(`hello there ${name}`));

// runMyFunc(sayHello());

// console.log();
// runMyFunc(addTwo);




