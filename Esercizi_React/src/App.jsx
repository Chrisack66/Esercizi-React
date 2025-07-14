import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">GitHub Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Guest" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
