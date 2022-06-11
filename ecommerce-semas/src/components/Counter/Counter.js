import { useState, useEffect } from "react";

const Counter = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const [results, setResults] = useState(0);

  useEffect(() => {
    setResults(count * 2);
  }, [count]);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    count < stock && setCount(count + 1);
  };

  const reset = () => {
    setCount(initial);
  };

  return (
    <div className="counter">
      <h1>Counter x 2: {results}</h1>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Counter;
