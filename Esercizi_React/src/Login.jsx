import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const isFormValid = username && password;
  const loginButtonColor = password.length < 8 ? 'red' : 'green';

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ username, password, remember });
  }

  function handleReset() {
    setUsername('');
    setPassword('');
    setRemember(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br />

      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={e => setRemember(e.target.checked)}
        />
        Remember me
      </label><br />

      <button type="submit" disabled={!isFormValid} style={{ backgroundColor: loginButtonColor }}>
        Login
      </button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;
