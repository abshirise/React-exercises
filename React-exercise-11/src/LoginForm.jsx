import { useState } from "react";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setPassword("");
    setUsername("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome Mr {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="username">Username</label> <br />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter username"
          required
        />
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
