import Thing from '../models/Thing'
import Log from '../models/Log'

class ThingController {
  async index (req, res) {
    try {
      let thing = await Thing.findOne({ _id: req.params.id, user: res.locals.id })
      return res.status(200).json(thing)
    } catch (error) {
      return res.status(500).send(error)      
    }
  }

  async show (req, res) {
    try {
      let things = await Thing.find({ user: res.locals.id })
      return res.status(200).json(things)
    } catch (error) {
      return res.status(500).send(error)      
    }
  }

  async store (req, res) {
    try {
      let thing = new Thing(req.body)
      thing.user = res.locals.id
      await thing.save()
      return res.status(201).json(thing)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async update (req, res) {
    try {
      let thing = await Thing.findByIdAndUpdate(req.params.id, req.body)
      return res.status(202).json(thing)
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async destroy (req, res) {
    try {
      let thing = await Thing.findByIdAndDelete(req.params.id)
      return res.status(200).json(thing)      
    } catch (error) {
      return res.status(500).send(error)      
    }
  }
}

export default new ThingController()
