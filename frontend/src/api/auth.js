import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth'

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password })
    return response.data  // Expecting data.token in response
  } catch (error) {
    throw error
  }
}
