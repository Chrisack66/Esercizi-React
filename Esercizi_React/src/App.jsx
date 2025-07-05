import React from 'react';
import useCounter from './useCounter';
import FilteredList from './FilteredList';

const sampleList = [
  { id: 1, name: 'Alice', age: 17 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 30 },
  { id: 4, name: 'Daisy', age: 16 },
];

function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <h2>Over 18 List</h2>
      <FilteredList items={sampleList} />
    </div>
  );
}

export default App;
