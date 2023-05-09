import { Schema, model } from "mongoose";

const Author = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    nacionalidad: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default model("Author", Author);
