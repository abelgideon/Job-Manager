import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api/v1`,
})

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance
