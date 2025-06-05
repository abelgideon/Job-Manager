import { useNavigate } from 'react-router-dom'
import NotFound from './NotFound'

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  if (!token) {
    return <NotFound />
  }
  return children
}
export default ProtectedRoutes
