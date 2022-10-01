import axios from 'axios'

// const URL = 'https://ibit-blog.herokuapp.com'
const URL = 'http://localhost:5000'

export const fetchPosts = () => axios.get(`${URL}/posts`)
export const createPost = (payload) => axios.post(`${URL}/posts`, payload)
export const updatePost = (payload) =>
    axios.post(`${URL}/posts/update`, payload)
export const deletePost = (payload) =>
    axios.post(`${URL}/posts/delete`, payload)
export const createUser = (payload) => axios.post(`${URL}/users`, payload)
export const findUser = payload => axios.post(`${URL}/users/find`, payload)