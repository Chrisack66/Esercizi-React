import { useState } from 'react';
import CounterDisplay from './CounterDisplay';

function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = () => {
    // Meglio usare la funzione se il nuovo valore dipende dallo stato precedente
    setCounter ((c) => c + 1);
  };

  const handleDecrement = () => {
    setCounter ((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;