import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/users";

function Login() {
  const navigate = useNavigate("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    setError("");
    login(user)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Login Failed");
      });
  };
  return (
    <div>
      <div>
        <label>{error}</label>
        <input
          placeholder="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input placeholder="password" />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
