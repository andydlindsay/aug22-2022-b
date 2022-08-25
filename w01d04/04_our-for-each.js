const greetings = ['hi', 'hello', 'howdy', 'supbro', 'yo', 'hola', 'whaddup'];

const ourCallback = (greeting) => {
  return console.log(`${greeting} means hello`);
};

greetings.forEach(ourCallback);

const ourForEach = (arr, callback) => {
  for (const element of arr) {
    callback(element);
  }
};

console.log();

ourForEach(greetings, ourCallback);
