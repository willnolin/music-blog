import Comment from '../models/comment.js';
import Post from '../models/post.js';

export const createComment = async (req, res) => {
  const { slug } = req.params
  const updatedPost = await Comment.create(req.body)
  .then(postComment => {
      console.log("Comment Created:", postComment)
      return Post.findOneAndUpdate({slug: slug},
        { $push: { comments: postComment._id } }, { new: true, useFindAndModify: false }
      );
    });
  res.status(200).json(updatedPost);
}

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const { slug } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      await Post.findOneAndUpdate({slug : slug},
        { $pull: { comments: id } })
      return res.status(200).json("Comment deleted")
    }
    throw new Error("Err: Comment was not deleted")
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
}
