import { useEffect, useState } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then(setUser)
      .catch(() => setUser(null));
  }, [username]);

  if (!user) return <p>User "{username}" not found.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <img src={user.avatar_url} alt={user.login} width={50} />
      <h3>{user.name || "(No name provided)"}</h3>
      <p>@{user.login}</p>
    </div>
  );
}

export default GithubUser;
