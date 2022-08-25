// added in ES6
// 1. shorter syntax
// 2. arrow functions DO NOT create `this`
// 3. if there's only one arg, no need for parens
// 4. if your func is only one line, you can remove the curly braces
// 5. if no curly braces, the line of code is returned implicitly

// function() {} // this
// () => {}

const sayHello = name => `hello there ${name}`;

const returnVal = sayHello('alice');
console.log(returnVal);


// if (true) console.log('do thing');
// if (err) throw err;
