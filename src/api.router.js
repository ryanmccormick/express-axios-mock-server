const CustomAxios = require('./core/custom-axios');
const express = require('express');
const { useTestData } = require('./config');
const apiRouter = express.Router();
const apiService = new CustomAxios({}, useTestData);

const servicePath = 'http://localhost:3001/api/service-data';

apiRouter.get('/', (req, res) => {
  res.json({
    isApiRoot: true,
    health: 'UP'
  });
});

apiRouter.get('/service-data', (req, res, next) => {
  return apiService.get(servicePath)
    .then(response => res.json(response.data))
    .catch(err => next(err))
});

module.exports = apiRouter;
