// src/services/loginService.js
import axios from 'axios'

const API_URL = 'http://localhost:3000' // URL del servidor Mockoon

export const LoginTest = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/LoginTest`, {
      email,
      password
    })
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Error de autenticación')
    } else {
      throw new Error('Error de red o del servidor')
    }
  }
}
