// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();
// console.log(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// closure: that a function remembers the variables that were in memory when the functionw as declared

let count = 0; // 1
const name = 'Alice';

const increment = () => {
  // console.log(name);
  count++;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();
