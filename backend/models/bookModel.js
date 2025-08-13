import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
<<<<<<< HEAD
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
=======
>>>>>>> 36c507ae5ce89a65ea8ac8a22c5b086900ae8846
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Cat", bookSchema);
