const compression = require('compression');
const express = require('express');
const cors = require('cors');

module.exports = (modules, Router) => {
  const router = Router;
  const apiRouter = Router;

  /**Middleware Routes */
  apiRouter
    .use(cors())
    .use(express.json())
    .use(compression());

  /**Routes */
  apiRouter.use('/cars', modules.car);

  /**Api Inyection */
  router.use('/api', apiRouter);

  return router;
};
