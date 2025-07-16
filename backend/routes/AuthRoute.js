// routes/AuthRoute.js
const express = require("express");
const router = express.Router();

const { Signup } = require("../controllers/AuthController");
const { Login } = require("../controllers/LoginController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const UserModel = require("../model/UserModel");



//  Public Routes
router.post("/signup", Signup);
router.post("/login", Login);





router.get("/get-user-id", userVerification, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ id: user._id, fullName: user.fullName, email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



//  Protected Routes
router.get("/protected", userVerification, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

router.get("/dashboard", userVerification, async (req, res) => {
  res.status(200).json({
    message: "Welcome to your dashboard",
    user: req.user
  });
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
});

//  Health Check
router.get("/", (req, res) => {
  res.send("API is running ");
});

module.exports = router;
