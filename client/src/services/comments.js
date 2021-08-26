import api from './api.js'

export const createComment = async (slug, content) => {
  try {
    const comment = api.post(`/posts/${slug}`, content)
    return comment.data
  } catch (error) {
    throw error
  }
}

export const updateComment = async (slug, commentId) => {
  try {
    const updatedComment = api.put(`/posts/${slug}/comments/${commentId}`, content)
    return updatedComment.data
  } catch (error) {
    throw error
  }
}

export const deleteComment = async (slug, commentId) => {
  try {
    const comment = api.delete(`/posts/${slug}/comments/${commentId}`)
    return comment.data
  } catch (error) {
    throw error
  }
}