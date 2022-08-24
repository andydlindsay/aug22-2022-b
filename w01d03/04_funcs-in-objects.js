// objects are collections of key/value pairs
// are functions values?

// functions are first-class because they are objects

const sayHello = function(name) {
  return `hello ${name}`;
};

let tiger = {
  color: 'coffee',
  furry: true,
  stomach: [],
  run: function() {
    console.log('the tiger ran and ran');
  },
  eat: function(food) {
    this.stomach.push(food);
  }
};

const myOtherTiger = tiger;
tiger = null;

// tiger.stomach.push('tofu');
myOtherTiger.eat('penguins');
myOtherTiger.eat('other tigers');
myOtherTiger.eat('meat');

// console.log(sayHello);
console.log(myOtherTiger);

// tiger.run();

