export default function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Login with event.target:");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  }

  function loginWithFormData() {
    const form = document.getElementById("login-form");
    const formData = new FormData(form);

    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log("Login with FormData:");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  }

  return (
    <form id="login-form" onSubmit={handleLogin}>
      <div>
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFormData}>Login with FormData</button>
    </form>
  );
}