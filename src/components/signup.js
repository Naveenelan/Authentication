import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './rbg.jpeg';
import './signup.css'; // Adjust the path for your project's structure.

const Signup = () => {
  // Replace with an API call if the credentials are dynamically fetched.
  const credentials = {
    admin: { username: "Naveen", password: "Naveen" },
    user: { username: "Guru", password: "Guru" },
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    const { username, password } = formData;
    setLoading();
    setError("");

    // Simulated delay for authentication; replace with an API call if needed.
    setTimeout(() => {
      setLoading(false);

      if (
        username === credentials.admin.username &&
        password === credentials.admin.password
      ) {
        navigate("/admin", { state: { username } }); // Update path as per greencollar routes.
      } else if (
        username === credentials.user.username &&
        password === credentials.user.password
      ) {
        navigate("/user", { state: { username } }); // Update path as per greencollar routes.
      } else {
        setError("Invalid username or password. Please try again.");
      }
    }, 1000);
  };

  return (
    <div className="greencollar-signup-container">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo"/>;
      </div>
      <h1>Welcome to Signup page</h1>
      <p>Sign in to access your account.</p>
      <form onSubmit={handleSubmit} className="greencollar-signup-form">
        {/* Username Input */}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            placeholder="Enter your username"
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

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
