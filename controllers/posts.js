import Post from "../models/post.js"
// import Comment from "../models/comment.js"

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments")
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
////////////////// POSTS WITH COMMENTS //////////////////////////////////
export const showPostComments = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate("comments")
    post.comments.forEach(comment => console.log(comment.id))
    res.json(post.comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}



