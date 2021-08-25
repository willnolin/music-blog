import mongoose from 'mongoose'
import slugify from 'slugify'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    author: String,
    content: String,
    // post_id: { type: Schema.Types.ObjectId, ref: 'posts'}
  }
)

export default mongoose.model('comments', Comment)