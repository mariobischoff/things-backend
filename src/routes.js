import { Router } from 'express'
import ThingController from './app/controllers/ThingController'


const routes = Router();

routes.get('/thing', ThingController.index)
routes.post('/thing', ThingController.store)

export default routes
