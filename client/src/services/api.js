const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

// Helper for fetch with error handling
async function fetchAPI(endpoint, method = 'GET', body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Bearer ${token}`
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  })
  if (!response.ok) throw new Error('API error')
  return response.json()
}

export const recordVisit = () => fetchAPI('/visit', 'POST')

export const getStats = () => fetchAPI('/stats')

export const addRating = (data) => fetchAPI('/rating', 'POST', data)

export const addComment = (data) => fetchAPI('/comment', 'POST', data)

export const getComments = (type) => fetchAPI(`/comments?type=${type}`)

export const getAds = () => fetchAPI('/ads')

export const updateAds = (data, token) => fetchAPI('/ads', 'POST', data, token)

export const login = (credentials) => fetchAPI('/auth/login', 'POST', credentials)

export const recordAnalysis = () => fetchAPI('/analysis', 'POST')