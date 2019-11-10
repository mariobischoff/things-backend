import Log from '../models/Log'

class LogController {
  async index(req, res) {
    try {
      let log = await Log.findById()
    } catch (error) {
      return res.status(500).send(error)      
    }
  }
  async show(req, res) {

    // url http://localhost:3000/log/5d8f9172266a143d98e93cfa/1569694747216/1569694749612

    try {
      let logs = await Log.find({
        thing: req.params.id,
        createdAt: {
          '$gte': new Date(Number(req.params.start)),
          '$lte': new Date(Number(req.params.end))
        }
      })
      let values = []
      logs.forEach((val) => {
        values.push({ date: val.createdAt, values: val.values })
      })
      return res.status(200).json(values)
    } catch (error) {
      return res.status(500).send(error)      
    }
  }
  async destroy(req, res) {
    try {
      let log = await Log.findByIdAndDelete(req.params.id)
      return res.status(202).json(log)
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}

export default new LogController()
