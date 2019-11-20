import { Router } from 'express'
import DefaultController from './controllers/DeafultController'
import UserController from './controllers/UserController'
import ThingController from './controllers/ThingController'
import LogController from './controllers/LogController'
import ChannelController from './controllers/ChannelController'
import Auth from '../middleware/Auth'


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
router.get('/thing', Auth.authenticate ,ThingController.show)
router.get('/thing/:id', Auth.authenticate, ThingController.index)
router.post('/thing', Auth.authenticate, ThingController.store)
router.post('/thing/:id', Auth.authenticate, ThingController.update)

// Channel
router.use(ChannelController.board)
router.use(ChannelController.client)

// Log
router.get('log', Auth.authenticate, LogController.show)
router.get('/log/:id/:start/:end', Auth.authenticate, LogController.index)

export default router
