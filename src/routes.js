const express = require('express');

const ClientController = require('./controllers/UserController')
;
const routes = express.Router();


routes.post('/clients/new', ClientController.store);
routes.get('/clients/index', ClientController.index);

module.exports = routes;