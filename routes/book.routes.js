import { Router } from "express";
import { bookid, ListBook, createBook, deleteBook, updateBooks } from "../controllers/book.controller.js";

const router = Router();

router.get("/book", ListBook);
router.get("/book/:id", bookid);
router.post("/book", createBook);
router.put("/book/:id", updateBooks);
 router.delete("/book/:id",deleteBook)

export default router;
