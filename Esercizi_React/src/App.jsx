import { useState } from 'react';
import './App.css';
import HelloWorld from './hello_world.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HelloWorld />
    </>
  );
}

export default App;