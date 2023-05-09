import {Router} from 'express'
import { authorid, ListAuthor, createAuthor, deleteAuthor } from '../controllers/author.controller.js'


const router=Router()

router.get("/author",ListAuthor)
router.get("/author/:id",authorid)
router.post("/author",createAuthor)
 router.delete("/author/:id",deleteAuthor)

export default router;