import socket from 'socket.io'
import Auth from './middleware/Auth'
import Log from './app/models/Log'
import ChannelController from './app/controllers/ChannelController'


module.exports = (server) => {
  const io = socket(server)
  let things = []
  io.on('connection', (socket) => {
    if (socket['thingId']) {
      console.log(`Thing ${socket.id} connected`)
      things.push({ socketId: socket.id, thingId: socket['thingId'] })
      socket.emit('thingConnected', things)

      socket.on('disconnect', () => {
        console.log(`Thing ${socket.id} disconnect`)
        index = things.findIndex((ele) => {
          return ele.socketId === socket.id
        })
        things.splice(index, 1)
        socket.emit('thingDisconnect', things)

      })

      let thingId = thing['thingId']
      thing.on('sendData', (values) => {
        let log = new Log({ values })
        log.thing = thingId
        try {
          log.save()
        } catch (error) {
          console.error(error)
        }
      })
    } else {
      console.log(`Front ${socket.id} connected`)
      socket.on('setConfig', (payload) => {
        socket.to(payload.thingId).emit('sendConfig', payload.config)
      })
    }
  })
  return io
}