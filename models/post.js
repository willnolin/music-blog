import mongoose from 'mongoose'
import slugify from 'slugify'
import Comment from './comment.js'
const Schema = mongoose.Schema

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
    ratings: [ 
      { type: Number, min: 1, max: 5 }
    ],
    slug: {
      type: String,
      required: true,
      unique: true
    }
  },
  { timestamps: true }
)
Post.virtual('average').get(function () {
  return Math.round(this.ratings.reduce((avg, rating) => avg += rating)/this.ratings.length)
});

Post.pre('validate', function(next) {
  if (this.title) {
    this.slug = slugify(this.title, {lower: true, strict:true})
  }
  next()
})




export default mongoose.model('posts', Post) // <--- creates a model out of the schema