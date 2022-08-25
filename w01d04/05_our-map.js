const greetings = ['hi', 'hello', 'howdy', 'supbro', 'yo', 'hola', 'whaddup'];

// const mappedGreetings = greetings.map((greeting) => {
//   return `<h1>${greeting}</h1>`;
// });

// console.log(greetings);
// console.log(mappedGreetings);

const ourMap = (arr, callback) => {
  // create a return array to hold the return values from the callback
  const output = [];

  // loop through the provided array
  arr.forEach((element) => {
    // call the provided callback with each element AND store the return value in var
    // const returnVal = callback(element);

    // // add the return value into our array of return values
    // output.push(returnVal);

    output.push(callback(element));    
  });

  // return the finished array
  return output;
};

const ourMappedGreetings = ourMap(greetings, (greeting) => {
  return `${greeting.toUpperCase()} Alice`;
});

// console.log(ourMappedGreetings);

const objs = [
  {
    greeting: 'hi',
    username: 'alice'
  },
  {
    greeting: 'hola',
    username: 'bob'
  }
];

const mappedObjs = ourMap(objs, (obj) => {
  return `${obj.greeting} ${obj.username}`;
});

console.log(mappedObjs);
