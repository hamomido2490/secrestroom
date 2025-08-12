import jwtDecode from 'jwt-decode'

export const isAdmin = () => {
  const token = localStorage.getItem('adminToken')
  if (!token) return false
  const decoded = jwtDecode(token)
  return decoded.role === 'admin'
}