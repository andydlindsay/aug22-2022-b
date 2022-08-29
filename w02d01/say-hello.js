const sayHello = (name) => {
  if (!name) {
    return false;
  }

  return `hello there ${name}`;
};

const addTwo = () => {};

// module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.addTwo = addTwo;

module.exports = {
  sayHello,
  addTwo,
  moreStuff: 'hello'
};
