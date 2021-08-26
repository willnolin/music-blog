import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getOnePost } from '../services/posts';

function PostDetail() {

  const { slug } = useParams();
  const [post, setPost] = useState({})
  
  useEffect(() => {
    const fetchPost = async () => {
      const thisPost = await getOnePost(slug)
      setPost(thisPost)
    }
    fetchPost()
  }, [])

  return (
    <div className="section mt-6">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column">
            <p className="title is-size-1">{post.title}</p>
            <p className="subtitle is-size-4">By: {post.author}</p>
            <p className="container">{[...Array(post.average)].map((n, i) => '*' )}</p>
          </div>
          <div className="column">
            <p className="py-3 px-4">{post.content}</p>
          </div>
          <div className="column">
          </div>
        </div>
            <div className="tabs is-boxed">
              <ul>
                <li className="is-active"><a>Post</a></li>
                <li><a>Comments</a></li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default PostDetail
