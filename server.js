import express from 'express'
import logger from 'morgan'

import db from './db/connection.js'
import Post from './models/post.js'

const app = express()

const PORT = process.env.PORT || 3000

//middleware i.e. third party plugins for the express framework
app.use(express.json())  //express's json parser
app.use(logger('dev')) // adds logging capability, keeps track of requests and what path they took

db.on('connected', () => {
  console.log('Connected to MONGODB!')
  app.listen(PORT, () =>
    console.log("Express server running on Port", PORT))

})


app.get("/", (req, res) => res.send("This is the root!"))

//get all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

// get one post by id
app.get('/posts/:id', async (req, res) => {
  //must have a response or app will break  (timeout)
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.put('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message})
  }
})

app.delete('/posts/:id', async (req, res) => {
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
  })
