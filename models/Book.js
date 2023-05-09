import { Schema, model } from "mongoose";

const Book = new Schema(
  {
    titulo: {
      type: String,
      require: true,
    },
    paginas: {
      type: Number,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
export default model("Book", Book);
