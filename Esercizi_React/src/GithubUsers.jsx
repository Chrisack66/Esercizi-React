import { useState } from 'react';
import GithubUser from './GithubUser';

function GithubUsers() {
  const [input, setInput] = useState('');
  const [usernames, setUsernames] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed && !usernames.includes(trimmed)) {
      setUsernames((prev) => [...prev, trimmed]);
    }
    setInput('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {usernames.map((name) => (
          <li key={name}>
            <GithubUser username={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUsers;
