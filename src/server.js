import http from 'http'
import io from 'socket.io'
import app from './app'

const server = http.Server(app)
const ws = io(server)

ws.on('connection', (socket) => {
  console.log(`A user ${socket.id} connected!`)
  socket.on('sendData', (data) => {
    console.log(data)
  })
})

// app.use((req, res, next) => {
//   res.locals['socketio'] = io
//   next()
// })

server.listen(3000, () => console.log('server up at port 3000'))
