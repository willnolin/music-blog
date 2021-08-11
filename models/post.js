import mongoose from 'mongoose'
const Schema = mongoose.Schema


// const comment = new Schema({
//   author: String,
//   content: String
// })

const Post = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comments"
      }
    ],
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post) // <--- creates a model out of the schema