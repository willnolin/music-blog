import axios from 'axios'
// add auth and production URL
const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default api;