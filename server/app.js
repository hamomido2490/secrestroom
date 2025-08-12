const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const adsRoutes = require('./routes/adsRoutes')
const commentsRoutes = require('./routes/commentsRoutes')
const ratingsRoutes = require('./routes/ratingsRoutes')
const statsRoutes = require('./routes/statsRoutes')
const visitsRoutes = require('./routes/visitsRoutes')
const sanitizeMiddleware = require('./middleware/sanitizeMiddleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(sanitizeMiddleware) // Sanitize all inputs

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use('/api/auth', authRoutes)
app.use('/api/ads', adsRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/ratings', ratingsRoutes)
app.use('/api/stats', statsRoutes)
app.use('/api/visit', visitsRoutes)
app.use('/api/analysis', statsRoutes) // Added for recordAnalysis

// CSP header for security
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline'; frame-src *;")
  next()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))