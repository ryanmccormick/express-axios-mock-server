const express = require('express');
const apiRouter = require('./api.router');
const app = express();

app.use('/api', apiRouter);

app.get('/health', (req, res) => {
  res.json({
    health: 'up'
  });
});

module.exports = app;
