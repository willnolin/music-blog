import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  //reset database
  await db.dropDatabase()


  const posts = [{
    title: "durian",
    author: "billy bob",
    content: "This is a post about the durian fruit"
  },
  {
    title: "poppy",
    author: "willy bob",
    content: "This is a post about the Wizard of Oz!!!!!  YEEAAYY"
  },
  {
    title: "dragonfruit",
    author: "chilly bob",
    content: "This is a dragonfruit post"
  },
  {
    title: "will",
    author: "silly bob",
    content: "This is a post about will, wow"
  },
  {
    title: "leavitt",
    author: "killy bob",
    content: "The leavitt theater is a brand new theater in town with live music."
  },
  {
    title: "Capital Records",
    author: "bill bob",
    content: "This is an article about capital records"
  },

  ]

  await Post.insertMany(posts)
  console.log(`Created ${posts.length} Posts`)

  db.close()
}

insertData()