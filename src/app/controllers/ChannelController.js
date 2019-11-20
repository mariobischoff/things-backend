import Log from '../models/Log'
import Thing from '../models/Thing'

class ChannelController {
  
  board(req) {
    const io = req.app.get('io')
    io.on('connection', (thing) => {
      console.log(`Thing ${thing.id} connected!`)
      thing.join(thing.id)
      let thingId = thing['thingId']
      thing.on('sendData', (values) => {
        let log = new Log({ values })
        console.log(log)
        log.thing = thingId
        try {
          log.save()
        } catch (error) {
          console.error(error)
        }
      })
    })
  }

  client(req) {
    const io = req.app.get('io')
    const rooms = io.rooms
    const front = io.of('/front')
    // let things = Thing.find({_}, 'id')
    front.on('connection', (client) => {
      console.log(`front ${client.id} connected`)
      client.on('setConfig', (config, idThing) => {
        console.log(config, idThing)
      })
    })
  }
}

export default new ChannelController()