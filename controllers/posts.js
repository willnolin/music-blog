import Post from "../models/post.js"
import Comment from "../models/comment.js"

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
    const { slug } = req.params
    const post = await Post.findOne({ slug: slug }).populate("comments")
    console.log(post.average)
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
    const { slug }  = req.params
    const post = await Post.findOneAndUpdate({ slug: slug }, req.body, { new: true })
    await post.save()
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
    // console.log(deleted.comments)
    if (deleted) {
      Comment.deleteMany({
        _id: {
          $in: deleted.comments
        }
      },
        function (err) {
        if (err) {
          res.send(err);
        } else {
          res.status(200).json("Post deleted")
        }
      });

    }
    // throw new Error("Err: Product was not deleted")
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}


////////////////// POSTS WITH COMMENTS //////////////////////////////////
export const showPostComments = async (req, res) => {
  try {
    const { slug } = req.params
    const post = await Post.findOne({ slug: slug }).populate("comments")
      res.json(post.comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}



