import Log from '../models/Log'

class ChannelController {
  board(req, res) {
    const io = res.locals['socketio']
    io.on()
  }
  client(req, res) {

  }
}

export default new ChannelController()