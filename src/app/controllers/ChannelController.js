import Log from '../models/Log'

class ChannelController {
  board(ws, req) {
    ws.on('message', async (data) => {
      let values = JSON.parse(data)
      try {
        let log = new Log({ values })
        log.thing = req.params.idThing
        await log.save()
      } catch (error) {
        console.error(error)
      }
    })
  }
  client(ws, req) {
    ws.on('message', (data) => {
      req.app.locals.wss.clients.forEach(client => {
        client.send('Ola')
      })
    })
  }
}

export default new ChannelController()