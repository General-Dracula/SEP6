import axios from 'axios'

export const getStats = async () => {
  const response = await axios.get('/stats')

  return response.data
}