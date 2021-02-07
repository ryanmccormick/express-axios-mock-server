require('dotenv').config();
const express = require('express');
const apiRouter = require('./api.router');
const serviceProviderPort = process.env.SERVICE_PROVIDER_PORT || 5001;

const app = express();

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.json({health: 'up'})
});

app.listen(serviceProviderPort, (err) => {
  if (err) { return; }
  const message = `Service Provider is running on port ${serviceProviderPort}`;
  console.log(message);
});
