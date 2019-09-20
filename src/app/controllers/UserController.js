import User from '../models/User'

class UserController {
  async index (req, res) {
    try {
      let result = await User.findById(req.params.id)
      res.status(200).json(result)
    } catch (error) {
      res.status(500).send(error)
    }
  }

  show (req, res) {

  }

  async store (req, res) {
    try {
      let user = new User(req.body)
      let result = await user.save()
      return res.status(201).json(result)
    } catch (error) {
      res.status(500).send(error)      
    }
  }

  update (req, res) {

  }

  destroy (req, res) {

  }
}

export default new UserController()
