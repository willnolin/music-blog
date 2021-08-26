import api from './api.js'

export const getAllPosts = async () => {
  try {
    const posts = await api.get("/posts")
    return posts.data
  } catch (error) {
     throw error  // add custom errors
  }
}


export const getOnePost = async (slug) => {
  try {
    const post = await api.get(`/posts/${slug}`)
    return post.data

  } catch (error) {
    throw error
  }
}

export const createPost = async (content) => {
 try {
   const post = await api.post("/posts", content)
   return post.data
   
 } catch (error) {
   throw error
 }
}

export const updatePost = async (slug, content) => {
  try {
    const updatedPost = api.put(`/posts/${slug}`, content)
    return updatedPost.data
  } catch (error) {
    throw error
  }
}

export const deletePost = async (id) => {
  try {
    const deletedPost = api.delete(`/posts/${id}`)
    return deletedPost.data
  } catch (error) {
    throw error
  }
}

