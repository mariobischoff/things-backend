import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'
import Auth from '../src/middleware/auth'



const routes = Router();

// Autenticação
routes.post('/auth/', Auth.generateToken)

// Usuário
routes.get('/user/:id', Auth.authenticate, UserController.index)
routes.get('/user', Auth.authenticate, UserController.show)
routes.post('/user', UserController.store)
routes.delete('/user/:id', Auth.authenticate, UserController.destroy)

// Coisa
routes.get('/thing/:id', ThingController.index)
routes.post('/thing', ThingController.store)

export default routes
