let tiger = {
  color: 'coffee',
  stomach: [],
  run: function() {
    console.log('the tiger ran and ran');
  },
  eat: function(food) {
    this.stomach.push(food);
  },
  furry: true,
};

const keys = Object.keys(tiger); 
console.log(keys);

for (const key of keys) {
  console.log(key, tiger[key]);
}

console.log();

for (const key of Object.keys(tiger)) {
  console.log(key, tiger[key]);
}

// for (const key in tiger) {
//   if (tiger.hasOwnProperty(key)) {
//     const value = tiger[key];
//     console.log(key, value);
//   }
// }

for (const key in tiger) {
  const value = tiger[key];
  console.log(key, value);
}

// const arr = ['alice', 'bob', 'carol'];

// for (const whatever of arr) {
//   console.log(whatever);
// }
