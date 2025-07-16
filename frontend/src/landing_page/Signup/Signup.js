import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";

function Hero() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { fullName, email, password } = formData;

    if (!fullName || !email || !password) {
      return toast.error("All fields are required");
    }

    // ✅ Password length check
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        

        { fullName, email, password },
        { withCredentials: true }
      );

      toast.success(res.data.message || "Signup successful");

      // ✅ Reset form
      setFormData({ fullName: "", email: "", password: "" });

      navigate("/login");
    } catch (error) {
      console.log("Signup error:", error.response?.data);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <ToastContainer />
      <div className="row text-center heading">
        <h1 className="mt-5">Open a free demat and trading account online</h1>
        <p className="fs-5 mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="row align-items-center mt-5">
        <div className="col-md-6 text-center mb-4">
          <img src="/media/images/account_open.svg" alt="Open account" />
        </div>

        <div className="col-md-6">
          <h2 className="signup-head">Signup now</h2>
          <p>Or track your existing application</p>

          <div className="custom-input-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              className="custom-input"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="custom-input"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              className="custom-input"
              onChange={handleChange}
            />

            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleSubmit}
            >
              Create Account
            </button>

            <button
              className="btn btn-outline-primary w-100 mt-2"
              onClick={() => navigate("/login")}
            >
              Already have an account? Login
            </button>
          </div>

          <p className="mt-3 text-muted">
            By proceeding, you agree to the{" "}
            <a href="https://zerodha.com/terms-and-conditions">terms</a> &{" "}
            <a href="https://zerodha.com/privacy-policy">privacy policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
