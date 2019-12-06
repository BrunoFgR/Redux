const { Router } = require('express');

const SessionController = require('./app/controllers/SessionController');

const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();


routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

module.exports = routes;