import http from 'http'
import expressWs from 'express-ws'
import app from './app'
// import webSocket from 'ws'

// const server = http.createServer(app)
// const expressWs = expressWs(app)

// const s = new webSocket.Server({ server })

// s.on('connection', (socket, req) => {
//   console.log('Client connected')
//   socket.on('message', (message) => { console.log("Received: " + message) })
// })


app.listen(3000, () => console.log('server up at port 3000'))
