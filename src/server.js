import http from 'http'
import app from './app'
import Socket from './socket';

const server = http.Server(app)
const io = new Socket(server)

server.listen(3000, () => console.log('server up at port 3000'))
