import { useState } from "react";
import '../Counter/counter.css'

import { Button } from "@chakra-ui/react";

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
      <Button onClick={increment}>+</Button>
      <Button onClick={() => onAdd(count)}>{count}</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={() => onAdd(count)}>{ stock === 0 ? 'Sin Stock' : 'Agregar producto'}</Button>
    </div>
  );
};

export default Counter;
