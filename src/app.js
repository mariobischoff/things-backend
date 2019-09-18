import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import databaseConfig from './config/database'

class App {
  constructor () {
    this.express = express()

    // this.database()
    this.middleware()
    this.routes()
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true
    })
  }

  middleware () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(routes)
  }
}

export default new App().express
