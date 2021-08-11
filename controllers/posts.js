import Post from "../models/post.js"
import Comment from "../models/comment.js"

// app.get("/", (req, res) => res.send("This is the root!"))

//get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

// get one post by id
export const getOnePost = async (req, res) => {
  //must have a response or app will break  (timeout)
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate("comments")
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}


export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).json("Post deleted")
    }
    throw new Error("Err: Product was not deleted")
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const createComment = async (req, res) => {
    const { id } = req.params
    const updatedPost = await Comment.create(req.body)
      .then(postComment => {
        console.log("Comment Created:", postComment)
        return Post.findByIdAndUpdate(id,
          { $push: { comments: postComment._id } }, { new: true, useFindAndModify: false }
        );
      });
  res.status(200).json(updatedPost);
}

