import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
  //reset database
  await db.dropDatabase()


  const posts = [{
    title: "durian",
    author: "billy bob",
    content: "This is a post about the durian fruit",
    ratings: [1,3,5,2,4]
  },
  {
    title: "poppy",
    author: "willy bob",
    content: "This is a post about the Wizard of Oz!!!!!  YEEAAYY",
    ratings: [1,3,5,1,1,1,1,1,1,1,1,2,4]
  },
  {
    title: "dragonfruit",
    author: "chilly bob",
    content: "This is a dragonfruit post",
    ratings: [1,3,2,2,2,2,2,5,2,4]
  },
  {
    title: "will",
    author: "silly bob",
    content: "This is a post about will, wow",
    ratings: [1,3,5,5,4,5,5,5,4,5,2,4]
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