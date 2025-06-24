import { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleLogin(e) {
    e.preventDefault(); // previene il comportamento predefinito del form
    onLogin(formData);  // stampa lo stato al click
  }

  function handleReset() {
    setFormData({ username: '', password: '', remember: false });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>
      </div>

      <button type="submit" disabled={!formData.username || !formData.password}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;