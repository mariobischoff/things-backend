class ThingController {
  index (req, res) {
    res.send('things api alive')
  }

  show (req, res) {

  }

  store (req, res) {
    const values = req.body
    console.log(values)
    res.send('data received')
  }

  update (req, res) {

  }

  destroy (req, res) {

  }
}

export default new ThingController()
