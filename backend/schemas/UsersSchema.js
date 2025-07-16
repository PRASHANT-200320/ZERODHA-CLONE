const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true }); // Automatically adds createdAt & updatedAt

//  Password hashing middleware
UsersSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//  Add password comparison method
UsersSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

//  Export the model (not just schema)
module.exports = mongoose.model("User", UsersSchema);
