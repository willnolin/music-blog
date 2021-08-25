import { Router } from "express";
import * as controllers from "../controllers/comments.js"
import restrict from '../helpers/restrict.js'

const router = Router();


router.post("/posts/:slug/comments", controllers.createComment) // create a comment
router.put("/posts/:slug/comments/:id", controllers.updateComment) // update a comment
router.delete("/posts/:slug/comments/:id", controllers.deleteComment) // delete a comment

export default router;
