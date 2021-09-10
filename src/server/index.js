const config = require('../config');
const router = require('express').Router();
const Startup = require('./startup');
const Server = require('./server');
const apiRoutes = require('../routes');

/**Models */
const db = require('../models');


/**Repositories */
const ProviderRepositories = require('../repositories');
const repository = new ProviderRepositories(db);

/**Services */
const ProviderServices = require('../services');
const services = new ProviderServices(repository);

/**Controllers */
const Controllers = require('../controllers/modules');
const entities = new Controllers(router, services);

const _router = apiRoutes(entities, router);
const server = new Server(config, _router);
const app = new Startup({ server });

module.exports = app;
