import {useState} from 'react';

// let count = 0;

const Counter = () => {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // count++;

    setCount(count + 1); // 1
    console.log(count);
  };

  return (
    <div>
      <h2>Counter component</h2>
      <h2>Count: { count }</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default Counter;
