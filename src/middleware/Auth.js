import User from '../app/models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class Auth {

  async authenticate (req, res, next) {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ msg: 'Missing Authorization Header' });
    }
    try {
      const decoded = await jwt.verify(token, process.env.SECRET)
      res.locals.id = decoded
      console.log(res.locals.id)
      next()
    } catch (error) {
      return res.status(401).send('Token invalid')
    }
  }

  async authenticateSocket (socket, next) {
    console.log(socket)
    const token = socket.handshake.query['token']
    if (!token) next()
    try {
      const decoded = await jwt.verify(token, process.env.SECRET)
      socket['thingId'] = decoded._id
      next()
    } catch (error) {
      return console.error(error)
    }
  }

  async generateToken (req, res) {
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email: email })
      if (bcrypt.compareSync(password, user.hash_password)) {
        let token = jwt.sign({ _id: user._id }, process.env.SECRET)
        return res.status(200).json({ token, email: user.email })
      } else {
        return res.status(401).json({ msg: 'Invalid Password' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({ msg: 'Invalid Email' })
    }
  }
}

export default new Auth()
