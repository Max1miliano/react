import { useState } from "react";
import '../Counter/counter.css'

const Counter = ({ onAdd, initial, stock }) => {

  const [count, setCount] = useState(initial);

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const increment = () => {
    count < stock && setCount(count + 1);
  };

  return (
    <div className="counter">
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>{count}</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default Counter;
