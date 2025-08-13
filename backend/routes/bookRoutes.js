import express from "express";
import { Book } from "../models/bookModel.js";
import { verifyToken } from "./authRoutes.js";

const router = express.Router();

// Route for Saving a new Book
router.post("/", verifyToken, async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title , author , publishYear",
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      userId: request.userId, // Add the user ID from the token
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting All Books from Database (user's own books only)
router.get("/", verifyToken, async (request, response) => {
  try {
    const books = await Book.find({ userId: request.userId });
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Getting All Books by id (user's own books only)
router.get("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findOne({ _id: id, userId: request.userId });
    
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Routes for update book (user's own books only)
router.put("/:id", verifyToken, async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title , author , publishYear",
      });
    }

    const { id } = request.params;

    const result = await Book.findOneAndUpdate(
      { _id: id, userId: request.userId },
      request.body,
      { new: true }
    );

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for delete book (user's own books only)
router.delete("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findOneAndDelete({ _id: id, userId: request.userId });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
