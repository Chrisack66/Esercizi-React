import { useState } from 'react';

function useCounter(initialValue = 0) {
  // Stato per il contatore
  const [count, setCount] = useState(initialValue);

  // Funzione per incrementare il contatore
  const increment = () => setCount(prev => prev + 1);

  // Funzione per decrementare il contatore
  const decrement = () => setCount(prev => prev - 1);

  // Funzione per resettare il contatore al valore iniziale
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
