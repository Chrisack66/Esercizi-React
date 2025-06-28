import Welcome from './Welcome';
import CounterDisplay from './CounterDisplay';
import Login from './Login';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleLogin(data) {
    console.log('Login Data:', data);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <Welcome name="Guest" />
      <CounterDisplay count={count} />
      <button onClick={() => setCount(count + 1)}>Incrementa</button>

      <h3>Login Form</h3>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
