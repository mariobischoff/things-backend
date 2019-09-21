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
      next()
    } catch (error) {
      return res.status(401).send('Token invalid')
    }
  }

  async generateToken (req, res) {
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email: email })
      if (bcrypt.compareSync(password, user.hash_password)) {
        let token = jwt.sign(user.id, process.env.SECRET)
        return res.status(200).json({ token })
      } else {
        return res.status(401).json({ msg: "Invalid Password" })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  }
}

export default new Auth()