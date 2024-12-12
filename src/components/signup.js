import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "", // Initially empty
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.role) {
      setError("Please select a role.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate an API call to authenticate/signup
    setTimeout(() => {
      setLoading(false);
      const token = formData.role === "Admin" ? "admin-token" : "user-token";

      // Redirect based on role
      if (formData.role === "Admin") {
        navigate("/admin", { state: { token } });
      } else if (formData.role === "User" || formData.role === "Guest") {
        navigate("/user", { state: { token } });
      }
    }, 1000);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Welcome! Please sign up.</p>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* Name Input */}
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Enter your password"
          />
        </div>

        {/* Role Selection */}
        <div className="input-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Role:     
            </option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            {/* <option value="Guest">Guest</option> */}
          </select>
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
