const express = require('express');
const apiRouter = express.Router();


apiRouter.get('/', (req, res) => {
  res.json({
    isApiRoot: true,
    health: 'UP'
  });
});

apiRouter.get('/service-data', (req, res) => {
  console.log('returning data from service');

  res.json({
    isServiceData: true,
    description: "This is data from a service"
  });
});

module.exports = apiRouter;
