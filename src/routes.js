import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'
import Auth from './middleware/Auth'


const routes = Router();

// Autenticação
routes.post('/auth/', Auth.generateToken)

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

export default routes
