import { Router } from 'express'
import UserController from './app/controllers/UserController'
import ThingController from './app/controllers/ThingController'
import LogController from './app/controllers/LogController'
import Auth from './middleware/Auth'


const router = Router();

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

// Log
router.ws('/', LogController.store)
router.post('/log/:id', Auth.authenticate, LogController.store)
router.get('/log/:id/:start/:end', Auth.authenticate, LogController.show)

export default router
