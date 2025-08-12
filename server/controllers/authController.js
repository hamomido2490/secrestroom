const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
  const { password } = req.body
  const hashed = process.env.ADMIN_PASSWORD_HASH
  if (await bcrypt.compare(password, hashed)) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.json(token)
  } else {
    res.status(401).json({ error: 'Invalid credentials' })
  }
}