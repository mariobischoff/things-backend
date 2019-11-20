import socket from 'socket.io'
import Auth from './middleware/Auth'
import Log from './app/models/Log'


module.exports = (server) => {
  const io = socket(server)
  io.of('/').use(Auth.authenticateBoard)
  // io.on('connection', (thing) => {
  //   console.log(`Thing ${thing.id} connected!`)
  //   let thingId = thing['thingId']
  //   thing.on('sendData', (values) => {
  //     let log = new Log({ values })
      
  //     console.log(log)
  //     log.thing = thingId
  //     try {
  //       log.save()
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })
  // })
  return io
}