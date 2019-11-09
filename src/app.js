import express from 'express'
import expressWs from 'express-ws'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'

import databaseConfig from './config/database'

class App {
  constructor () {
    this.express = express()
    this.expressWs = expressWs(this.express)
    this._database()
    this._middleware()
    this._routes()
  }

  _database () {
    mongoose.connect(databaseConfig.uri, databaseConfig.opt)
  }

  _middleware () {
    this.express.use(express.json())
    this.express.use(morgan('tiny'))
    this.express.use(cors())
  }

  _routes () {
    this.express.use(require('./routes').default)
  }
}

export default new App().express
