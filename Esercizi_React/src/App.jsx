import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';

function App() {
  const handleLogin = (formData) => {
    console.log('Login data:', formData);
  };

  return (
    <div>
      <h1>Interactive Welcome</h1>
      <InteractiveWelcome />

      <h1>Login Form</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;