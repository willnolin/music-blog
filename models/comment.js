import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Comment = new Schema(
  {
    // post: { type: Schema.Types.ObjectId, ref: 'Post' },
    author: String,
    content: String

  }
)

export default mongoose.model('comments', Comment)