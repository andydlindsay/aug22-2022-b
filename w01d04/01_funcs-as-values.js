// function sayHello() {}

let sayHello = function(name) {
  console.log(`hello ${name}`);
};

// sayHello('alice');

// console.log(sayHello.toString());

const somethingElse = sayHello;
// sayHello = null;

// somethingElse('bob');

const funcs = [sayHello, somethingElse, console.log];

// for (const func of funcs) {
//   func('carol'); // console.log('carol');
// }

sayHello.secretMessage = 'you found the secret';

console.log(sayHello(sayHello.secretMessage));
