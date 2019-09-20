import express from 'express'
import mongoose from 'mongoose'

import routes from './routes'
import databaseConfig from './config/database'

class App {
  constructor () {
    this.express = express()
    this._database()
    this._middleware()
    this._routes()
  }

  _database () {
    mongoose.connect(databaseConfig.uri, databaseConfig.opt)
  }

  _middleware () {
    this.express.use(express.json())
  }

  _routes () {
    this.express.use(routes)
  }
}

export default new App().express
