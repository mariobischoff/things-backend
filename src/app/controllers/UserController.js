import User from '../models/User'
import bcrypt from 'bcrypt'

class UserController {
  async index (req, res) {
    try {
      let result = await User.findById(req.params.id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async show (req, res) {
    try {
      let result = await User.find()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async store (req, res) {
    try {
      let plainPass = req.body.password
      delete req.body.password
      let salt = await bcrypt.genSalt(10)
      req.body.hash_password = await bcrypt.hash(plainPass, salt)
      let user = new User(req.body)
      let result = await user.save()
      return res.status(201).json(result)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)      
    }
  }

  update (req, res) {

  }

  async destroy (req, res) {
    try {
      let result = await User.findByIdAndDelete(req.params.id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).send(error)      
    }
  }
}

export default new UserController()
