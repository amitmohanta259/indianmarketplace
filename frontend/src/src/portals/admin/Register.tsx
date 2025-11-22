import React, { useState } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import api from "../../services/api";

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (data: any) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post("/admin/auth/register", data);
      setSuccess("Registration successful! You can now log in.");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <AuthForm
        type="register"
        onSubmit={handleRegister}
        loading={loading}
        error={error}
        success={success}
      />
    </div>
  );
};

export default Register;
