import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, UserRound } from "lucide-react";
import bakeryLogo from "../assets/bakery-logo.png";

function Login({ onLogin }) {
  const [role, setRole] = useState("client");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    /*
      TEMPORARY LOGIN
      No database required.
    */

    const accounts = {
      admin: {
        username: "admin",
        password: "admin123",
        role: "admin",
        name: "Sarah"
      },
      client: {
        username: "client",
        password: "client123",
        role: "client",
        name: "Customer"
      }
    };

    const account = accounts[role];

    if (
      username.trim() === account.username &&
      password === account.password
    ) {
      onLogin({
        role: account.role,
        name: account.name,
        username: account.username
      });

      return;
    }

    setError("Incorrect username or password.");
  };

  return (
    <div className="login-page">

      <div className="login-background-shape login-shape-one" />
      <div className="login-background-shape login-shape-two" />

      <div className="login-container">

        {/* BRANDING */}
        <div className="login-brand">

          <img
            src={bakeryLogo}
            alt="Tin & Din Bakery"
            className="login-logo"
          />

          <h1>Tin & Din Bakery</h1>

          <p>
            Freshly baked. Made with care.
          </p>

        </div>

        {/* LOGIN CARD */}
        <div className="login-card">

          <div className="login-card-header">
            <h2>Welcome Back</h2>

            <p>
              Sign in to continue to your account.
            </p>
          </div>

          {/* ROLE SELECTOR */}
          <div className="login-role-selector">

            <button
              type="button"
              className={`login-role-button ${
                role === "client" ? "active" : ""
              }`}
              onClick={() => {
                setRole("client");
                setError("");
              }}
            >
              <UserRound size={18} />
              <span>Client</span>
            </button>

            <button
              type="button"
              className={`login-role-button ${
                role === "admin" ? "active" : ""
              }`}
              onClick={() => {
                setRole("admin");
                setError("");
              }}
            >
              <Lock size={18} />
              <span>Admin</span>
            </button>

          </div>

          <form onSubmit={handleLogin}>

            {/* USERNAME */}
            <div className="login-form-group">

              <label>Username</label>

              <div className="login-input-wrapper">

                <UserRound size={18} />

                <input
                  type="text"
                  placeholder={
                    role === "admin"
                      ? "Enter admin username"
                      : "Enter client username"
                  }
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="login-form-group">

              <label>Password</label>

              <div className="login-input-wrapper">

                <Lock size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}
            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-submit-button"
            >
              Sign In
            </button>

          </form>

          {/* TEMPORARY LOGIN INFO */}
          <div className="login-demo-info">

            <span>
              Temporary access
            </span>

            <p>
              {role === "admin"
                ? "Admin: admin / admin123"
                : "Client: client / client123"}
            </p>

          </div>

        </div>

        <div className="login-footer">
          © 2026 Tin & Din Bakery. All rights reserved.
        </div>

      </div>

    </div>
  );
}

export default Login;