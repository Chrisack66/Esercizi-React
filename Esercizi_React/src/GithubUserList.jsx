import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div>
        <h3>GitHub Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={user.login}>{user.login}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default GithubUserList;
