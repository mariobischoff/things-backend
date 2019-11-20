import Log from '../models/Log'
import Thing from '../models/Thing'

class ChannelController {
  
  board(thing) {
    console.log(`Thing ${thing.id} connected!`)
    thing.join(thing.id)
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
  }

  client(front) {
    // const rooms = io.rooms
    // let things = Thing.find({_}, 'id')
    console.log(`Thing ${front.id} connected!`)
    front.on('setConfig', (payload) => {
      console.log(payload)
    })

  }
}

export default new ChannelController()