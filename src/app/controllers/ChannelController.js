import Log from '../models/Log'
import Thing from '../models/Thing'

class ChannelController {

  constructor () {
    this.things = []
  }
  
  board(thing) {
    if (!thing['thingId']) {
      return null
    }
    this.things.push({ thingId: thing['thingId'], socketId: thing.id })
    console.log(this.things)

    thing.on('disconnect', () => {
      this.things.splice(this.things.indexOf(thing['thingId']), 1)
    })
    console.log(this.things)

    console.log(`Thing ${thing.id} connected!`)
    
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
    if (front['thingId']) {
      return front.disconect()
    }
    // const rooms = io.rooms
    // let things = Thing.find({_}, 'id')
    console.log(`Front ${front.id} connected!`)
    front.on('setConfig', (payload) => {
      console.log(payload)
      front.to(this.things['thingId'].socketId).emit('setConfig', payload)
    })
  }
}

export default new ChannelController()