import socket from 'socket.io'
import Auth from './middleware/Auth'
import ChannelController from './app/controllers/ChannelController'


module.exports = (server) => {
  const io = socket(server)
  io.use(Auth.authenticateSocket)
  io.on('connection', ChannelController.client)
  io.of('/front').on('connection', ChannelController.board)
  return io
}