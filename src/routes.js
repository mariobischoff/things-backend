import { Router } from 'express'
import DefaultController from './app/controllers/DeafultController'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'
import LogController from './app/controllers/LogController'
import ChannelController from './app/controllers/ChannelController'
import Auth from './middleware/Auth'


const router = Router();

// Default
router.get('/', DefaultController.DefaultRouter)

// Autenticação
router.post('/auth', Auth.generateToken)

// Usuário
router.get('/user/:id', Auth.authenticate, UserController.index)
router.get('/user', Auth.authenticate, UserController.show)
router.post('/user', UserController.store)
router.put('/user/:id', Auth.authenticate, UserController.update)
router.delete('/user/:id', Auth.authenticate, UserController.destroy)

// Coisa
router.get('/thing/:id', Auth.authenticate, ThingController.index)
router.get('/thing', Auth.authenticate ,ThingController.show)
router.post('/thing', Auth.authenticate, ThingController.store)
router.post('/thing/:id', Auth.authenticate, ThingController.update)

// Channel
router.ws('/board/:idThing', ChannelController.board)
router.ws('/client/:idUser', ChannelController.client)

// Log
router.get('/log/:id/:start/:end', Auth.authenticate, LogController.show)

export default router
