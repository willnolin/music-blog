import { Router } from "express";
import * as controllers from "../controllers/posts.js"
import restrict from '../helpers/restrict.js'

const router = Router();

router.get("/posts", controllers.getPosts ) // get all posts with comments id arrays
router.get("/posts/:id", controllers.getOnePost )  // get one post with comments id array
router.post("/posts",  controllers.createPost )  // create a post
router.put("/posts/:id", controllers.updatePost)  // update a post
router.delete("/posts/:id", controllers.deletePost) // delete a post 

router.get("/posts/:id/comments", controllers.showPostComments)  // show a post's comments


export default router;