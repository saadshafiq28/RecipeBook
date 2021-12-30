import jwt from 'jsonwebtoken'

function auth(roles) {
  return (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) return res.status(401).send('Access denied. No token provided.')

    try {
      let user = jwt.verify(token, process.env.JWT_SECRET)
      user = user.user
      req.user = user

      if (roles.indexOf(user.role) === -1 && user.role !== 'admin')
        return res
          .status(403)
          .json('Access denied. You are not authorized to access this resource.')

      next()
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

export default auth
