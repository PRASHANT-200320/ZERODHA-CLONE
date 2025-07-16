import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
   const res = await axios.post(
  `${process.env.REACT_APP_BACKEND_URL}/login`,
  { email, password },
  { withCredentials: true }
);


      toast.success(res.data.message || "Login successful");
      setCredentials({ email: "", password: "" });

      setIsLoggedIn(true);

      navigate("/"); //  redirect after login
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src="./media/images/loginpage.png"
            alt="Login visual"
            className="login-image"
          />
        </div>
        <div className="col-md-6 login-form-wrapper">
          <h2 className="login-title">Log In</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />

            <button type="submit" className="btn-success" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-3">
            Don’t have an account? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
