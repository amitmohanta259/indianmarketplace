import React, { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: any) => void;
  loading?: boolean;
  error?: string | null;
  success?: string | null;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit, loading, error, success }) => {
  const [data, setData] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Email and password are required");
      return;
    }

    if (type === "register" && data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white" style={{ width: "400px" }}>
      <h3 className="text-center mb-3 text-capitalize">{type}</h3>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="mb-3">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {type === "register" && (
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={data.confirmPassword}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
      )}

      <button type="submit" className="btn btn-primary w-100" disabled={loading}>
        {loading ? "Please wait..." : type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
