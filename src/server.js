import http from 'http'
import app from './app/app'

const server = http.Server(app)
const io = require('./socket')(server)

app.set('io', io)

server.listen(3000, () => console.log('server up at port 3000'))
