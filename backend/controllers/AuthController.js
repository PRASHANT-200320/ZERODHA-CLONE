// controllers/AuthController.js
const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../SecreteToken");

const Signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //  Use pre-save hook by calling new + save
    const newUser = new UsersModel({ fullName, email, password });
    await newUser.save(); // this triggers pre("save") → hashes password

    // Create JWT
    const token = createSecretToken(newUser._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None", // adjust to "Lax" if local dev
      secure: true,     // set false if testing locally without HTTPS
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed", error: error.message });
  }
};

module.exports = { Signup };

