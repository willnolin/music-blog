import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../services/posts.js'  

function Posts() {

  const [posts, setPosts] = useState([])
  // const [comments, setComments] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      console.log(allPosts)
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])
  
  return (
    <div className="has-text-centered">
     
      <h1 className="is-size-3 has-text-weight-bold">Posts</h1>
      {posts.map((post, index) => (
      <div className="section">
        <div className="has-background-light 
        py-3 my-2 mx-6" key={index}>
          <h1 className="title is-size-3 is-uppercase has-background-grey has-text-white">{post.title}</h1>
          <p className="subtitle is-size-6 px-6 pt-4">{post.content}</p>
          {console.log(post.average)}
          {post.ratings &&
            <p>{post.average}</p>
          }
          {post.comments &&
            post.comments.map((comment, i) => (
              <div className = "comment" key = {index}>
                <p>{comment.author}</p>
                <p className="is-size-7">{comment.content}</p>
              </div>
              ) )
          }
            <Link to={`/posts/${post.slug}`}>
              <button className="button is-primary mt-4">
                View
              </button>
            </Link>
            </div>
        </div>
      ))
        }
      
    </div>
  )
}

export default Posts
