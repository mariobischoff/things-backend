import socket from 'socket.io'

class Socket {
  constructor(server) {
    this.io = socket(server)
  }

  init () {
    this.io.sockets.on('connection', (socket) => {
      console.log(`socket ${socket.id} connected!`)
    })
  }
}

export default Socket
