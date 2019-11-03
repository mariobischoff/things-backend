import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'
import LogController from './app/controllers/LogController'
import Auth from './middleware/Auth'


const routes = Router();

// Autenticação
routes.post('/auth', Auth.generateToken)

// Usuário
routes.get('/user/:id', Auth.authenticate, UserController.index)
routes.get('/user', Auth.authenticate, UserController.show)
routes.post('/user', UserController.store)
routes.put('/user/:id', Auth.authenticate, UserController.update)
routes.delete('/user/:id', Auth.authenticate, UserController.destroy)

// Coisa
routes.get('/thing/:id', Auth.authenticate, ThingController.index)
routes.get('/thing', Auth.authenticate ,ThingController.show)
routes.post('/thing', Auth.authenticate, ThingController.store)
routes.post('/thing/:id', Auth.authenticate, ThingController.update)

// Log
routes.post('/log/:id', Auth.authenticate, LogController.store)
routes.get('/log/:id/:start/:end', Auth.authenticate, LogController.show)

export default routes
