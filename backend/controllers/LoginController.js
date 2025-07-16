const UserModel = require("../model/UserModel"); 
const bcrypt = require("bcrypt");
const { createSecretToken } = require("../SecreteToken");
const jwt = require("jsonwebtoken");


const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email }); 

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "None", 
      secure: true,
       maxAge: 24 * 60 * 60 * 1000,
    });
     

    const userWithoutPassword = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userWithoutPassword,
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { Login };
