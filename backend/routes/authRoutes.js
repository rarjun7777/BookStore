import express from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// JWT Secret (in production, use environment variable)
const JWT_SECRET = "your-secret-key-change-in-production";

// Register user
router.post("/register", async (request, response) => {
  try {
    const { username, email, password } = request.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return response.status(400).json({
        message: existingUser.email === email ? "Email already registered" : "Username already taken",
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
    });

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    response.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

// Login user
router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(401).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return response.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    response.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});



// Verify token middleware
export const verifyToken = (request, response, next) => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    return response.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    request.userId = decoded.userId;
    next();
  } catch (error) {
    response.status(401).json({ message: "Invalid token." });
  }
};

export default router;
