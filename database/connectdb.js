import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Base de datos conectada 🎉");
  } catch (error) {
    console.log("Error bd 🧨");
  }
})();
