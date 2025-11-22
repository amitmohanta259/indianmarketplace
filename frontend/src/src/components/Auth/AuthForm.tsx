// src/components/auth/AuthForm.tsx
import React, { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: { username?: string; password?: string; email?: string; tenantName?: string; fullName?: string }) => void;
  loading?: boolean;
  showTenant?: boolean;
  showFullName?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  onSubmit,
  loading = false,
  showTenant = false,
  showFullName = false,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password, email, tenantName, fullName });
  };

  return (
    <form onSubmit={handleSubmit}>
      {showFullName && (
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
      )}

      {type === "register" && (
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      )}

      {type === "login" && (
        <div className="form-group">
          <label>Username or Email</label>
          <input
            type="text"
            placeholder="Enter your username or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      )}

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {showTenant && (
        <div className="form-group">
          <label>Tenant Name</label>
          <input
            type="text"
            placeholder="Enter Tenant Name"
            value={tenantName}
            onChange={(e) => setTenantName(e.target.value)}
            required
          />
        </div>
      )}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading
          ? type === "login"
            ? "Logging in..."
            : "Registering..."
          : type === "login"
          ? "Login"
          : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
