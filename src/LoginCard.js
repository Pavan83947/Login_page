import React, { useState } from "react";
import "./LoginCard.css";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8; // Example: Ensure password is at least 8 characters.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format!");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long!");
      return;
    }

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      setSuccess(`Login successful! Token: ${data.token}`);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <p>Welcome to PAVAN LT</p>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit}>
        <label>Email ID</label>
        <input
          type="email"
          placeholder="Enter your email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="options">
          <label className="custom-checkbox">
            <input type="checkbox" />
            <span className="toggle"></span> Remember me
          </label>
          <a href="/" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginCard;



