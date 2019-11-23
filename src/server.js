import http from 'http'
import app from './app/app'

const server = http.Server(app)
const io = require('./socket')(server)

app.set('io', io)

server.listen(process.env.PORT, () => console.log(`server up at port ${process.env.PORT}`))
