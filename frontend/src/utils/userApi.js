import axios from 'axios'

const signupUser = async (email, password) => {
  const response = await axios.post('/signup', { email, password })

  return response.data
}

const loginUser = async (email, password) => {
  const response = await axios.post('/login', { email, password })

  return response.data
}

const addToFav = async (email, movieId) => {
  const response = await axios.post('/favorite', { email, movieId })

  return response.data
}

const removeFromFav = async (email, movieId) => {
  // adding an explicit header because axios.delete does not work as axios.post
  const response = await axios.delete('/favorite', { data: { email, movieId }, headers: { 'Content-Type': 'application/json'} })

  return response.data
}

const getFavs = async email => {
  const response = await axios.post('/favorite/list', { email })

  return response.data
}

const api = { signupUser, loginUser, addToFav, getFavs, removeFromFav }

export default api
