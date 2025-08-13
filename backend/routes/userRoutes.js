import express from "express";
import { User } from "../models/userModel.js";
import { Book } from "../models/bookModel.js";
import { verifyToken } from "./authRoutes.js";

const router = express.Router();

// Get all user profiles (excluding current user) with their books
router.get("/profiles", verifyToken, async (request, response) => {
  try {
    const users = await User.find({
      _id: { $ne: request.userId } // Exclude current user
    }).select("username profile createdAt");

    // Get books for each user
    const usersWithBooks = await Promise.all(
      users.map(async (user) => {
        const books = await Book.find({ userId: user._id }).sort({ createdAt: -1 });
        return {
          ...user.toObject(),
          books: {
            count: books.length,
            data: books
          }
        };
      })
    );

    response.json({
      count: usersWithBooks.length,
      data: usersWithBooks,
    });
  } catch (error) {
    console.error("Get profiles error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

// Delete user account and all their books
router.delete("/account", verifyToken, async (request, response) => {
  try {
    const userId = request.userId;

    // Delete all books belonging to the user
    await Book.deleteMany({ userId });

    // Delete the user account
    await User.findByIdAndDelete(userId);

    response.json({ 
      message: "Account deleted successfully" 
    });
  } catch (error) {
    console.error("Delete account error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
});

export default router;
