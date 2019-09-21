import User from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class AuthController {
  async login (req, res) {
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email: email })
      if (bcrypt.compareSync(password, user.hash_password)) {
        let token = jwt.sign(user.email, process.env.SECRET)
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

export default new AuthController()
