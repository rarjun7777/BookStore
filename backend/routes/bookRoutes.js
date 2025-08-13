import express from "express";
import { Book } from "../models/bookModel.js";
<<<<<<< HEAD
import { verifyToken } from "./authRoutes.js";
=======
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846

const router = express.Router();

// Route for Saving a new Book
<<<<<<< HEAD
router.post("/", verifyToken, async (request, response) => {
=======
router.post("/", async (request, response) => {
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
<<<<<<< HEAD
        message: "Send all required fields: title , author , publishYear",
=======
        message: "Send all required fields: title , authro , publishYear",
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
<<<<<<< HEAD
      userId: request.userId, // Add the user ID from the token
=======
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

<<<<<<< HEAD
// Route for Getting All Books from Database (user's own books only)
router.get("/", verifyToken, async (request, response) => {
  try {
    const books = await Book.find({ userId: request.userId });
=======
// Route for Getting All Books from Database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

<<<<<<< HEAD
// Route for Getting All Books by id (user's own books only)
router.get("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findOne({ _id: id, userId: request.userId });
    
    if (!book) {
      return response.status(404).json({ message: "Book not found" });
    }
    
=======
// Route for Getting All Books by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

<<<<<<< HEAD
//Routes for update book (user's own books only)
router.put("/:id", verifyToken, async (request, response) => {
=======
//Routes for update book
router.put("/:id", async (request, response) => {
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
<<<<<<< HEAD
        message: "Send all required fields: title , author , publishYear",
=======
        message: "Send all required fields: title , authro , publishYear",
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
      });
    }

    const { id } = request.params;

<<<<<<< HEAD
    const result = await Book.findOneAndUpdate(
      { _id: id, userId: request.userId },
      request.body,
      { new: true }
    );
=======
    const result = await Book.findByIdAndUpdate(id, request.body);
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

<<<<<<< HEAD
//Route for delete book (user's own books only)
router.delete("/:id", verifyToken, async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findOneAndDelete({ _id: id, userId: request.userId });
=======
//Route for delete book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846

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
