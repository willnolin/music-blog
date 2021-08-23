import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Comment = new Schema(
  {
    author: String,
    content: String,
    // post_id: { type: Schema.Types.ObjectId, ref: 'posts'}
  }
)

export default mongoose.model('comments', Comment)