import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Homepage from "./landing_page/home/Homepage";
import Signup from "./landing_page/Signup/Signup";
import Login from "./landing_page/login/Login";
import Aboutpage from "./landing_page/about/Aboutpage";
import Productpage from "./landing_page/products/Productpage";
import Pricingpage from "./landing_page/pricing/Pricingpage";
import Supportpage from "./landing_page/support/Supportpage";
import NotFound from "./landing_page/NotFound";
import Dashboard from "./landing_page/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/*  Render Navbar unless on /dashboard */}
      {location.pathname !== "/dashboard" && (
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/*  Render Footer unless on /dashboard */}
      {location.pathname !== "/dashboard" && <Footer />}
    </>
  );
}

export default App;
