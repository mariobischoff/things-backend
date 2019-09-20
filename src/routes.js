import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'


const routes = Router();

// Usuário
routes.get('/user/:id', UserController.index)
routes.get('/user', UserController.show)
routes.post('/user', UserController.store)
routes.delete('/user/:id', UserController.destroy)

// Coisa
routes.get('/thing/:id', ThingController.index)
routes.post('/thing', ThingController.store)

export default routes
