require('./config');
const express = require('express');
const apiRouter = require('./api.router');
const mainServicePort = process.env.APP_PORT || 5000;
const app = express();

app.use('/api', apiRouter);

app.get('/health', (req, res) => {
  res.json({
    health: 'up'
  });
});

app.listen(mainServicePort, (err) => {
  if (err) { return; }
  const message = `Main Service running on port: ${mainServicePort}`;
  console.log(message);
});
