import { Router } from "express";
import * as controllers from "../controllers/comments.js"
import restrict from '../helpers/restrict.js'

const router = Router();


router.post("/posts/:id", controllers.createComment) // create a comment
router.put("/posts/:post_id/comments/:id", controllers.updateComment) // update a comment
router.delete("/posts/:post_id/comments/:id", controllers.deleteComment) // delete a comment

export default router;
