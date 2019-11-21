const express = require('express');

const ClientController = require('./controllers/UserController')
;
const routes = express.Router();


routes.post('/clients/new', ClientController.store);
routes.get('/clients/index', ClientController.index);
routes.delete('/cliets/:id', ClientController.destroy);
routes.put('/clients/:id', ClientController.update);

module.exports = routes;